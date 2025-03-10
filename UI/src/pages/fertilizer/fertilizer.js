import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import React, { useState } from "react";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");
  const [lang, setLang] = useState("en");
  function onSearchSubmit(term) {
    setLoad(true);
    console.log("Clicked");
    let url = "http://127.0.0.1:5000/fertilizer-predict";
    let body = JSON.stringify({
      "soil-type": soilType,
      "crop-type": cropType,
      moisture: parseFloat(moisture),
      nitrogen: parseFloat(nitrogen),
      phosphorous: parseFloat(phosphorus),
      pottasium: parseFloat(potassium),
      city: city,
      lang: lang
    });
    console.log("body", body);
    try {
      fetch(url, {
        // mode: "no-cors",
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        },
        body: body
      })
        .then((response) => response.json())
        .then((data) => {
          let main_data = data["data"];
          setPrediction(main_data["prediction"]);
          setInformation(main_data["info"]["info"]);
          setApplication(
            main_data["info"]["application"]["1"] +
              " " +
              main_data["info"]["application"]["2"]
          );
          setSpecification(main_data["info"]["specifications"]);
          console.log("res", data); // gives SyntaxError: Unexpected end of input
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }

    setLoad(false);
  }

  return (
    <>
      <Header />
      <section className="">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 grid place-items-center">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the Fertilizer for your crop
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
                  className="inline-block px-6 py-2.5 bg-green-600 text-white 
                  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
                  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Kannada
                </button>
              </div>
              <div className="ml-16 ">
                <button
                  onClick={() => setLang("ml")}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white 
                  font-medium text-xs leading-tight uppercase rounded shadow-md
                  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                  focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Malayala
                </button>
              </div>
            </div>
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Clay">Clayey</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>
            {/* dropdown for crop type */}
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Crop Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Millets">Millets</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Barley">Barley</option>
                  <option value="Paddy">Paddy</option>
                </select>
              </div>
            </div>

            <input
              onChange={(e) => setMoisture(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Enter moisture value"
            />
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Enter nitrogen value"
            />
            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Enter phosphorous value"
            />
            <input
              onChange={(e) => setPotassium(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Enter potassium value"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              className="w-3/5 my-2"
              type="text"
              placeholder="Enter city"
            />

            <div className="grid place-items-center p-10">
              <div className="mt-2">
                <button
                  onClick={() => onSearchSubmit("aaa")}
                  type="button"
                  className="inline-block  px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Fertilizer Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {load ? (
            <div className="grid place-items-center">loading </div>
          ) : (
            <div></div>
          )}
          {prediction !== "" ? (
  <div className="grid place-items-center my-14 text-center" style={{marginLeft:'50px',marginRight:'50px'}}>
    <div style={{width:'100%',border:'1px solid gray',backgroundColor:'cadetblue',height:'60px',borderBottomColor:'red'}}>
      <p className="font-bold" style={{color:"white",fontSize:'18px'}}>Predicted Fertilizer</p>
      <span>Predicted fertilizer according to the submitted parameter is</span>
    </div>
  <table className="border-collapse border border-gray-400">
    <tbody>
      <tr>
        <td className="border border-gray-400 p-2 font-bold" style={{color:'#304D30'}}>Fertilizer</td>
        <td className="border border-gray-400 p-2">{prediction}</td>
      </tr>
      <tr>
        <td className="border border-gray-400 p-2 font-bold" style={{color:'#304D30'}}>Information</td>
        <td className="border border-gray-400 p-2">{information}</td>
      </tr>
      <tr>
        <td className="border border-gray-400 p-2 font-bold"style={{color:'#304D30'}}>Application</td>
        <td className="border border-gray-400 p-2">{application}</td>
      </tr>
      <tr>
        <td className="border border-gray-400 p-2 font-bold" style={{color:'#304D30'}}>Specification</td>
        <td className="border border-gray-400 p-2">{specification}</td>
      </tr>
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

export default Fertilizer;
