import React from "react";
import "../assets/styles/error.css";

function ErrorPage() {
  return (
    <div>
      <section className="error text-center">
        <div className="container ">
          <span className="p-2">
            <b>Что пошло не так ? </b>
          Упс... ошибка.
          </span>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
