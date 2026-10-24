import React from "react";

class MyCustomComponent extends React.Component
{
    render()
    {
        return React.createElement
        (
            "div",
            null,
            React.createElement("p", null, "This is a simple list"),
            React.createElement("ol", null, 
                React.createElement("li", null, "This is list item 1"),
                React.createElement("li", null, "This is list item 2"),
            ),
        );
    }
}
export default MyCustomComponent

