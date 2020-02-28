import axios from "axios";

const saveData = async (result, entryHandler) => {
    let headers = JSON.parse(headers);
    headers = {
        ...headers,
        "Content-type": "application/json",
        Accept: "application/json"
    };
    try {
        await axios.post("/performance_data",
        {
            performance_data: {data: {messsage:result } }
        }, {
            headers: headers
        }
    );
    entryHandler();
  } catch (err) {
      console.error(err);
      alert("Something went wrong");
  }
};

export { saveData };