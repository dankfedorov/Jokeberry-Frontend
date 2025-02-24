import React from "react";

function JwtAuth() {
  return (
    <div>
      <section id="jwtauth" className="jwtauth">
        <div className=" container__jwtauth">
          <h2 className="text-center mb-0">JWT авторизация (JSON Web Token)</h2>
          <p className="text-center mb-4">backend часть / технология авторизации на сайтах</p>

          <div className="row ">
            <div className="col-md-12">
              <p className="p-1">
                <b>Как работает и зачем нужна JWT авторизация?</b>
              </p>
              <p className="p-1">
                это стандартный способ передачи информации в виде зашифрованного
                токена между клиентом и сервером.
              </p>
                          
            </div>

            <div className="col-md-12">
              <p className="p-1">
                <b>
                  После успешной авторизации/регистрации пользователю выдается токен,
                  который он отправляет на сервер с каждым запросом. Сервер
                  проверяет токен и идентифицирует пользователя, позволяя или
                  ограничивая доступ к необходимым данным.
                  Если у пользователя нет токена то достп к определенному ресурсу закрыт.
                </b>

              </p>
              <p className="p-1 "> Пример токена:<b>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9W67F264ysBcMcBndcEAs6g"</b>
              </p>
                        
              <p className="p-1">JWT (JSON Web Token) авторизация работает следующим образом: </p>
              <p className="p-1">При входе пользователя в систему сервер проверяет его учетные данные.</p>
              <p className="p-1">Если они корректны, сервер создает JWT токен, который содержит закодированную информацию о пользователе и его правах доступа.</p>
              <p className="p-1">Токен отправляется клиенту, который сохраняет его (например, в локальном хранилище).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JwtAuth;
