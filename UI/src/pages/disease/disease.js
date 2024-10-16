import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Disease = () => {
  const [photo, setPhoto] = useState([]);
  const [load, setLoad] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  let url = "http://127.0.0.1:5000/disease-predict/" + lang;
  let form = new FormData();
  form.append("file", photo[0]);

  function onClick() {
    try {
      fetch(url, {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: form
      })
        .then((response) => response.json())
        .then((data) => {
          let main_data = data["data"];
          setPrediction(main_data["prediction"]);
          console.log("res", data); // gives SyntaxError: Unexpected end of input
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Header />
      <section className="">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 grid place-items-center">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
              <br />
            </p>
            <div className="flex flex-row space-x-3 my-10">
              <div>Please select a Language, default language is English</div>
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("en")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  English
                </button>
              </div>
              <div className="ml-16">
                <button
                  onClick={() => setLang("kn")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Kannada
                </button>
              </div>
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("ml")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Malayalam
                </button>
              </div>
            </div>
            <p className="title">Select Image:</p>
            <div className="m-6 my-4">
              <input 
                 style={{backgroundColor:'white'}}
                type="file"
                onChange={(e) => setPhoto([e.target.files[0]])}
              />
            </div>
            {photo[0] && (
        <div>
          <p>Selected Image:</p>
          <img src={URL.createObjectURL(new Blob([photo[0]]))}/>        </div>
           )}
            <div className="py-4"> 
            <button
              onClick={() => onClick()}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Predict
            </button>
            </div>
            {/* {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>} */}
          </div>
        </div>

        <div>
          {load ? (
            <div className="grid place-items-center my-14  ">loading </div>
          ) : (
            <div></div>
          )}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
  <table className="border-collapse border border-gray-400">
    <tbody>
        <tr className="border border-gray-400 p-5 font-bold" style={{padding:'50px',backgroundColor:'cadetblue',color:'white'}}>
          <td style={{paddingLeft:'30px',paddingRight:'30px',paddingTop:'5px',paddingBottom:'5px'}}>Disease From Image Predicted</td></tr>
        <tr className="font-bold" style={{padding:'30px',color:'#304D30'}}><td style={{paddingLeft:'30px',paddingRight:'30px',paddingTop:'5px',paddingBottom:'5px'}}>{prediction}</td></tr>
    </tbody>
  </table>
</div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Disease;
