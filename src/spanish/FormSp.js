import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./../context";

import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  click1,
  //COMPONENTS
  About,
  GameFolder,
  DataFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./../index";

export const FormSp = () => {
  const {
    nextPageOne,
    form,
    formContinue,
    sound,
    about,
    gameFolder,
    dataFolder,
  } = useGlobalContext();
  const [person, setPerson] = useState({ firstName: "", age: "", country: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    // if (person.firstName && person.age && person.country) {
    //   const newPerson = { ...person, id: new Date().getTime().toString() }; //Revisar estas dos donde van?
    //   setPeople([...people, newPerson]); //
    // }
  };
  let hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  let days = new Date().getDate();
  let months = new Date().getMonth() + 1;
  const years = new Date().getFullYear();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (days < 10) {
    days = `0${days}`;
  }
  if (months < 10) {
    months = `0${months}`;
  }
  const fullDate = `at ${hours}:${minutes} on ${days}/${months}/${years}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.country) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", age: "", country: "" });
      nextPageOne(form, formContinue);
    }
  };
  useEffect(() => {
    localStorage.setItem("newName", JSON.stringify(person.firstName));
    localStorage.setItem("newAge", JSON.stringify(person.age));
    localStorage.setItem("newCountry", JSON.stringify(person.country));
    // localStorage.setItem("newTest", JSON.stringify(people));
    // Idealmente seria pasar los tres elementos al Array que ya esta creado y retirar la informacion direcamtente del LOCALHOST --> INVESTIGAR!
    localStorage.setItem(
      "newFullData",
      JSON.stringify({
        topName: person.firstName,
        topCountry: person.country,
        topAge: person.age,
        topDay: fullDate,
      })
      //Asi se pasan los 3, no a un array sino a un objeto
    );
    // eslint-disable-next-line
  }, [person]);

  const [play1] = useSound(click1, { volume: 0.5 });

  const infoWidth = window.innerWidth;

  return (
    <>
      {infoWidth >= 1024 && <InformationContainerTop />}
      <section className="container-back">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Askaway\Formulario</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <article className="container">
          <h4 className="form-title">Cuéntanos un poco sobre ti</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Ingresá tu nombre"
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="number"
                id="age"
                name="age"
                max="99"
                placeholder="Ingresá tu edad"
                value={person.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="text"
                id="country"
                name="country"
                placeholder="De donde eres?"
                value={person.country}
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <button
                type="submit"
                className="form-btn"
                onClick={() => (sound ? (handleSubmit, play1()) : handleSubmit)}
              >
                Enviar
              </button>
            </div>
          </form>
        </article>
        {infoWidth >= 1024 && about && <About />}
        {infoWidth >= 1024 && gameFolder && <GameFolder />}
        {infoWidth >= 1024 && dataFolder && <DataFolder />}
      </section>
      <InformationContainerBottom />
    </>
  );
};
