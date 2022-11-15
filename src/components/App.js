import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <StreamList />,
      },
      {
        path: "streams/new",
        element: <StreamCreate />,
      },
      {
        path: "streams/edit",
        element: <StreamEdit />,
      },
      {
        path: "streams/delete",
        element: <StreamDelete />,
      },
      {
        path: "streams/show",
        element: <StreamShow />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="ui container">
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
};

export default App;
