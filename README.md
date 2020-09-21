# Moyyn - User Pool Task

</br>

## Install:

> \$ git clone repo</br>
> \$ cd repo</br>
> \$ npm i</br>
> \$ npm start</br>

</br>

## Deploy:

> \$ git add . && git commit -m "commit" && git push</br>
> \$ npm run build</br>
> \$ surge</br>

https://user-pool.surge.sh/

</br>
</br>
</br>
</br>
</br>

## Task:

### Website login and routing

Using ReactJS build a two-page web application.

1. First page ('/' root route) should have a "Login to view our user pool" header, two input fields, one for Email and one for Password, and a "Login" button, one above the other. All elements should be center page.

2. Each field should validate itself. Use Formik and Yup for form control and validation. Email should be a valid email string, and password should be a string with a minimum amount of 8 characters. Display relevant errors if fields are invalid.

3. On successful login, the user is to be redirected to the second page ('/users' route). On page load make a GET request to https://jsonplaceholder.typicode.com/users and present each user in a card, displaying name, email, and city.

4. Add a dummy navigation bar with Moyyn logo on the left side and some dummy buttons aligned to the right.

Optional - use React-Router for routing.

Optional - use Material-UI for the UI elements.

</br>
</br>
</br>
</br>
</br>

## Fonts:

> \$ font-family: 'Poppins', sans-serif;

</br>

## Colors:

> \$ --main-black-color: black;</br> 
> \$ --main-dark-color: #1e2329;</br> 
> \$ --main-grey-color: #4c5b6d;</br> 
> \$ --main-light-color: #C0C0C0;</br> 
> \$ --main-bright-color: #e0e0e0;</br> 
> \$ --main-bg-color: white;</br> 
> \$ --main-error-color: red;</br> 
> \$ --main-confirmation-color: green;</br> 
> \$ --main-feat-color: #265cff;</br> 
> \$ --main-img-color: #6f42c1;</br> 
> \$ --about-bg-color: #ffc10770;</br> 
> \$ --contact-bg-color: #20c99670;</br>

</br>

## Used technologies:

(those steps are just for informational use)

</br>

### create-react-app

> \$ npx create-react-app .

https://reactjs.org/docs/getting-started.html

</br>

### react-router-dom

> \$ npm install --save react-router-dom

https://www.npmjs.com/package/react-router-dom

</br>

### formik / yup

> \$ npm install formik --save

> \$ npm install yup --save

https://formik.org/docs/overview

</br>

### surge

> \$ npm install --global surge

https://surge.sh/help/getting-started-with-surge
