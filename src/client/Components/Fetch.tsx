let Fetch = async (session: object, url: string, methodtype: string) => {
    try {
      let response = await fetch(url, {
        method: methodtype,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(session)
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  export default Fetch;
  