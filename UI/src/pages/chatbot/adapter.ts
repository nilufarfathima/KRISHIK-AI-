import {StreamingAdapterObserver} from '@nlux/react';

// A demo endpoint by nlux that connects to OpenAI
// and returns a stream of Server-Sent events
const demoProxyServerUrl = 'https://demo.api.nlux.ai/openai/chat/stream';

export const streamAdapter: any = {
  streamText: async (prompt: string, observer: StreamingAdapterObserver) => {
    const body = { prompt };
    const response = await fetch(demoProxyServerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
      observer.error(new Error('Failed to connect to the server'));
      return;
    }
    if (!response.body) {
      return;
    }
    // Read a stream of server-sent events
    // and feed them to the observer as they are being generated
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    let doneReading = false;

    while (!doneReading) {
      const { value, done } = await reader.read();
      if (done) {
        doneReading = true;
        continue;
      }

      const content = textDecoder.decode(value);
      if (content) {
        observer.next(content);
      }
    }

    observer.complete();
  }
};