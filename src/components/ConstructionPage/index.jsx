import React from "react";
import Button from "../Button";
import style from "../ConstructionPage/ConstructionPage.module.scss";

const ConstructionPage = () => {
  return (
    <div className={style.constructionPage}>
      <h1>Em Construção</h1>
      <div className={style.buttons}>
        <Button
          label="LinkedIn"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/marcus-queiroz/")
          }
        />
        <Button
          label="Whatsapp"
          onClick={() =>
            (window.location.href = "hhttps://wa.me/5512982518567")
          }
        />
        <Button
          label="GitHub"
          onClick={() =>
            (window.location.href = "https://github.com/bugmarcus")
          }
        />
      </div>
    </div>
  );
};

export default ConstructionPage;
