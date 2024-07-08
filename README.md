# Note App

## Frameworks

### FastAPI (version **0.111.0**)

It's a backend framework, very popular and easy to understand and use. It's liberty allows me to implement the MVC arquitecture. With Pydantic and SQLAlchemy, the database connection and data flow was easy to create and generates the backend documentation to make some tests. The data was send to the frontend were it was used to render the template (view). This is the backend of the app.

### Angular (version **18.0.0**)

It's a frontend framework created by google used mainly to build SPAs (Single Page APlications) and dinamic websites. Due to my previus experiences it was used to render all the templates and UI of the app.

## Libreria / paquetes

### SQLAlchemy (version **2.0.30**)

This library improve the interaction with relational databases through Objects. It provides an ORM to connect with the database, in this case SQLite. It allows to make queries, design models and create the database.

### pydantic (version **2.7.4**)

This library is used in Python to validate data and serialize models. With pydantic, the schemss were designed to control the data flow of the transactions.

### bootstrap (version **5.3.3**)

Is's a library created by twitter to improve the develop of websites/webapps with it's own set of `html`, `css` and `JavaScript` components. It ease the develop of UI.

### jquery (version **3.7.1**)

It's a library made to improve the execution of JavaScript scripts. It ease the process and interact with server through AJAX. It's main use on the project was to improve the bootstrap execution.

### Toastr (version **19.0.0**)

Is's a library used to show notifications. It was used to show the events and actions executed by the user.

## Tool

### git (version **2.25.1**)

This is the main tool to control the versions of the code. It creates a history and revert changes if necesary. It provide a CLI to make different operations like initialice a repository, add changes, work with branches and collaborate with other developers.

### uvicorn (version **0.30.1**)

It's main funciont is to execute ASGI servers to webapps and API services developed in python. IT's necessary to execute FastAPI properly.

## Engine

### SQLite (version **3.46.0**)

It's a relational database engine. It's light and provides the core to manage databases. Due to the size of the project was chosen as the database engine.

### Node (version **20.14.0**)

It creates an environment based on the V8 engine, where JavaScript is executed, used on all the browsers based on chromium. It's necessary to execute any JavaScript code outside the browser.

## Requirements

- Python 3.12
- Node 20

## How to Run

1. Go to the `backend` directory and create a virtual environment:

    python -m venv .venv

2. Activate the virtual environment:

    source .venv/bin/activate

3. Downloard the dependencies on the `requirements.txt` file:

    pip install -r 'requirements.txt'

4. Start the backend app. This command also creates the database:

    uvicorn main:app --reload

5. Now go to the `frontend` directory and download the dependencies:

    npm install

6. And start the proyect:

    npm start

This will take some minutes. When the execution is completed go to `localhost:4200`. If you want to see the API documentation, go to `localhost:8000`.
