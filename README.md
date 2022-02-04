# @psytech/react-render-engine

**Server-driven UI** is a technique which allows to render dynamic user interfaces for the web and native apps using structured data received from the server which describes different parts of the user interface and the data contained inside it. In this case, we call this structured data, a **"template"**.

Here's a good explanation of SDUI: https://www.judo.app/blog/server-driven-ui/

This package allows rendering of templates using React with template data received from the server. Here are some of the examples of cards that have been rendered using this package:
![Card examples](https://i.ibb.co/TTRS0xM/template-example.png)

## Example
To understand how this package works, let's look at this card structure & how it can be rendered using this package:
![Card DOM structure](https://i.ibb.co/31Z5Rnp/template-breakdown.png)

Each user interface element is made using template element which is in the following form:
```
{
	type: "text"/"container"/"image"
	id: "element_id",
	parent: "parent_id"/null,
	children: ["child_id_1", ... , "child_id_n"],
	text: "text_style_id",
	design: "design_style_id",
	properties: ["class","attrName=attrVal"]
}
```