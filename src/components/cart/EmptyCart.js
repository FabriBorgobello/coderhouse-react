import React from "react";
import { NavLink } from "react-router-dom";
import "./EmptyCart.css";

export const EmptyCart = () => {
    return (
        <div id="EmptyCart">
            <img
                id="cartIcon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ0Ni44NTNweCIgaGVpZ2h0PSI0NDYuODUzcHgiIHZpZXdCb3g9IjAgMCA0NDYuODUzIDQ0Ni44NTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0Ni44NTMgNDQ2Ljg1MzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ0NC4yNzQsOTMuMzZjLTIuNTU4LTMuNjY2LTYuNjc0LTUuOTMyLTExLjE0NS02LjEyM0wxNTUuOTQyLDc1LjI4OWMtNy45NTMtMC4zNDgtMTQuNTk5LDUuNzkyLTE0LjkzOSwxMy43MDgNCgkJYy0wLjMzOCw3LjkxMyw1Ljc5MiwxNC41OTksMTMuNzA3LDE0LjkzOWwyNTguNDIxLDExLjE0TDM2Mi4zMiwyNzMuNjFIMTM2LjIwNUw5NS4zNTQsNTEuMTc5DQoJCWMtMC44OTgtNC44NzUtNC4yNDUtOC45NDItOC44NjEtMTAuNzUzTDE5LjU4NiwxNC4xNDFjLTcuMzc0LTIuODg3LTE1LjY5NSwwLjczNS0xOC41OTEsOC4xYy0yLjg5MSw3LjM2OSwwLjczLDE1LjY5NSw4LjEsMTguNTkxDQoJCWw1OS40OTEsMjMuMzcxbDQxLjU3MiwyMjYuMzM1YzEuMjUzLDYuODA0LDcuMTgzLDExLjc0NiwxNC4xMDQsMTEuNzQ2aDYuODk2bC0xNS43NDcsNDMuNzRjLTEuMzE4LDMuNjY0LTAuNzc1LDcuNzMzLDEuNDY4LDEwLjkxNg0KCQljMi4yNCwzLjE4NCw1Ljg4Myw1LjA3OCw5Ljc3Miw1LjA3OGgxMS4wNDVjLTYuODQ0LDcuNjE3LTExLjA0NSwxNy42NDYtMTEuMDQ1LDI4LjY3NWMwLDIzLjcxOCwxOS4yOTksNDMuMDEyLDQzLjAxMiw0My4wMTINCgkJczQzLjAxMi0xOS4yOTQsNDMuMDEyLTQzLjAxMmMwLTExLjAyOC00LjIwMS0yMS4wNTgtMTEuMDQ0LTI4LjY3NWg5My43NzdjLTYuODQ3LDcuNjE3LTExLjA0NywxNy42NDYtMTEuMDQ3LDI4LjY3NQ0KCQljMCwyMy43MTgsMTkuMjk0LDQzLjAxMiw0My4wMTIsNDMuMDEyYzIzLjcxOSwwLDQzLjAxMi0xOS4yOTQsNDMuMDEyLTQzLjAxMmMwLTExLjAyOC00LjItMjEuMDU4LTExLjA0Mi0yOC42NzVoMTMuNDMyDQoJCWM2LjYsMCwxMS45NDgtNS4zNDksMTEuOTQ4LTExLjk0N2MwLTYuNi01LjM0OS0xMS45NDgtMTEuOTQ4LTExLjk0OEgxNDMuNjUxbDEyLjkwMi0zNS44NDNoMjE2LjIyMQ0KCQljNi4yMzUsMCwxMS43NTItNC4wMjgsMTMuNjUxLTkuOTZsNTkuNzM5LTE4Ni4zODdDNDQ3LjUzNiwxMDEuNjc5LDQ0Ni44MzIsOTcuMDI4LDQ0NC4yNzQsOTMuMzZ6IE0xNjkuNjY0LDQwOS44MTQNCgkJYy0xMC41NDMsMC0xOS4xMTctOC41NzMtMTkuMTE3LTE5LjExNnM4LjU3NC0xOS4xMTcsMTkuMTE3LTE5LjExN3MxOS4xMTYsOC41NzQsMTkuMTE2LDE5LjExN1MxODAuMjA3LDQwOS44MTQsMTY5LjY2NCw0MDkuODE0eg0KCQkgTTMyNy4zNzMsNDA5LjgxNGMtMTAuNTQzLDAtMTkuMTE2LTguNTczLTE5LjExNi0xOS4xMTZzOC41NzMtMTkuMTE3LDE5LjExNi0xOS4xMTdzMTkuMTE2LDguNTc0LDE5LjExNiwxOS4xMTcNCgkJUzMzNy45MTYsNDA5LjgxNCwzMjcuMzczLDQwOS44MTR6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                alt="Carrito"
            />
            <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
                ¡Tu carro está vacío! Añade un producto para comenzar.
            </h4>
            <NavLink to="/">
                <button className="btn">Ir al inicio</button>
            </NavLink>
        </div>
    );
};
