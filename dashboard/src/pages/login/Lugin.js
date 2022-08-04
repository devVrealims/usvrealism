@import url("https://fonts.googleapis.com/css?family=Open+Sans:600|Work+Sans:400,500,600,700&display=swap");

body {
  background: rgb(109, 112, 112);
  background: linear-gradient(
    135deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  font-family: "work sans";
}

html {
  font-size: 100%;
}

#loginform {
  max-width: 500px;
  min-width: 300px;
  max-height: 700px;
  width: 30%;
  height: 60%;
  margin: 100px auto;
  background-color: #ffffff;
  border-radius: 25px;
}

#headerTitle {
  text-align: center;
  font-family: "open sans", sans-serif;
  padding: 2rem 0;
  margin: 0;
  font-size: 2rem;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  max-width: 100%;
}

.row input {
  width: 80%;
  box-sizing: border-box;
  border: none;
  font-size: 1.3rem;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
  transition: box-shadow 0.2s ease-in;
}

.row input:focus {
  box-shadow: inset 0px -3px 0px 0px rgba(34, 193, 195, 0.7);
  outline: none;
}

.row input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.25s ease-out;
}

.row input:hover::-webkit-input-placeholder,
.row input:focus::-webkit-input-placeholder {
  opacity: 0;
}

.row label {
  align-self: start;
  padding-left: 4.5rem;
  padding-bottom: 0.5rem;
  color: rgba(187, 187, 187, 0.9);
}

.row button {
  border-radius: 25px;
  width: 80%;
  height: 40px;
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border: 0px;
  cursor: pointer;
  transition: opacity 0.25s ease-out;
}

.row button:hover {
  opacity: 0.8;
}

#button {
  padding-bottom: 1.5rem;
}

#facebookIcon {
  background-image: url("https://image.flaticon.com/icons/svg/145/145802.svg");
  background-repeat: no-repeat;
  width: 3rem;
  height: 3rem;
}

#twitterIcon {
  background-image: url("https://image.flaticon.com/icons/svg/145/145812.svg");
  background-repeat: no-repeat;
  width: 3rem;
  height: 3rem;
}

#googleIcon {
  background-image: url("https://image.flaticon.com/icons/svg/145/145804.svg");
  background-repeat: no-repeat;
  width: 3rem;
  height: 3rem;
}

#iconGroup {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

#iconGroup a {
  margin: 0 0.6rem;
}

#alternativeLogin {
  text-align: center;
  padding-top: 2rem;
  margin-top: 1.5rem;
}
