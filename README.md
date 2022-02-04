# **@psytech/react-render-engine**

**Server-driven UI** is a technique which allows to render dynamic user interfaces for the web and native apps using structured data received from the server which describes different parts of the user interface and the data contained inside it. In this case, we call this structured data, a **"template"**.

Here's a good explanation of SDUI: https://www.judo.app/blog/server-driven-ui/

This package allows rendering of templates using React with template data received from the server. Here are some of the examples of cards that have been rendered using this package which you can access using this [demo link](https://mutter-render-engine-service.psytech42.repl.co/):
![Template examples](https://i.ibb.co/TTRS0xM/template-example.png)

## **Structure**

**Each template consists of the following key-value pairs:**

1. `id`: A unique identification string for recognising the template.

2. `topElementId`: A unique identification string for recogising the topmost node element whose element data is stored in the element.

3. `element`: An object storing the template elements in the form of key-value pair, template_id: template_object.

4. `text`: An object containing the textual style objects in the form of key-value pair, text_style_id: text_style_object, where each text_style_object stores the textual styles (e.g. font-weight, font-style, text-decoration) which will be used by the individual layout elements.

5. `design`: An object containing non-textual style objects in the form of key-value pair, design_style_id: design_style_object, where each design_style_object stores the non-textual styles (e.g. height, width, background, color) which will be used by individual layout elements.

**So, each `template` will have the following form:**

```
{
	id: <STRING>"UID",
	topElementId: <STRING>"UID",
	element: <OBJECT>{...},
	design: <OBJECT>{...},
	text: <OBJECT>{...}
}
```

**An example of the `design` style object is:**

```
{
	background: "#fc6a03"
	color: "#fff"
	height: "fit-content"
	id: "3d87f501-3941-474e-8ce2-5489faf99ba2"
	margin:	"0px"
	padding: "5px"
	width: "fit-content"
}
```

**Each template element consists of the following the following key-value pairs or properties:**

#### **Structural properties:**

1. `id`: It describes a unique identification string to recognise the layout element.

2. `type`: It describes the type of layout element. Till mutter v0, only three layout elements were included: `container`, `text` & `image`. The topmost parent element will always have the type “container”.

   The reason this property is used is that at the end, each layout element has to be rendered or expressed in form of HTML tags (or JSX in case of react) & different tags have different **relevant attributes**. e.g. `src` attribute is relevant to an image tag, but not relevant to the div container tag. `href` attribute is relevant to a link tag, but not relevant to an image tag.

3. `parent`: It describes the unique identification string of the parent layout element. It can have two possible values, `null` or string of parent element. This is required because an HTML document has a tree structure, where there’s a parent tag and each parent tag can have 0 to N child elements, but each HTML tag only has one parent.

4. `children`: It is a list of strings that describes the unique identification string of the child elements of any given layout element. If it is an empty string, then it means that a layout element has no child elements, or simply, “It is an empty tag”.

#### **Non-structural properties**:

1. `text`: It describes a unique identification string for textual styling of an element, which includes properties such as `font-size`, `font-weight`, `font-style`, `text-decoration` etc.

   Using this string, the rendering script searches for the text styles present in the post data & once the required text style is found using the provided identification string, then it is added to an object which is assigned to a layout element’s style attributes.

2. `design`: It describes a unique identification string for non-textual styling of an element, which includes properties such as `color`, `margin`, `padding`, `border` properties, etc. The above process is also used for adding design properties to a card’s elements.

   **NOTE:** Any card’s styles that can be abstracted in the form of **DESIGN x TEXT**, where TEXT represents the textual styling and DESIGN represents the non-textual styling. Though the design styles represent all the non-textual CSS properties (which can count up to a few hundred CSS properties), for mutter v0, we’re only going to use a few CSS properties.

3. `properties`: It is a list of strings that describes the classes and/or the attributes of a layout element. Since both attributes and classes are described in the same way, the rendering script differentiates the class name and the attribute name-value pair is quite simple: the attribute name-value pairs are expressed as a string in the form `attrName=attrValue`, whereas class names are just plain text e.g. `p1`, `h2`.

**So, each template `element` will have the following form:**

```
{
	type: <STRING>"text"/<STRING>"container"/<STRING>"image"
	id: <STRING>"element_id",
	parent: <STRING>"parent_id"/null,
	children: <ARRAY>["child_id_1", ... , "child_id_n"],
	text: <STRING>"text_style_id",
	design: <STRING>"design_style_id",
	properties: <STRING>["class","attrName=attrVal"]
}
```

## **Styles**

**The package also comes with some styles such as:**

- `m-card`: To be used with a container with a height of 58vh & aspect ratio of 0.75.
- `m-rh-{5-100}`: Defines relative height with respect to card with +5% increment.
- `m-rw-{5-100}`: Defines relative width with respect to card with +5% increment.

## **Example**

To understand how this package works, let's look at this card structure & how it can be rendered using this package:
![Card DOM structure](https://i.ibb.co/31Z5Rnp/template-breakdown.png)

The above card structure consists of 4 template elements & for simplicity we're not going to use any custom design & text style properties, rather we're using **`Bootstrap 5`** classes:

**A container template element containing other template elements of the card:**

```
{
	id: "1",
	type: "container"
	design: "",
	text: "",
	parent: null,
	children: ["2","3","4"],
	properties: ["m-card","d-flex","flex-column","border"]
}
```

**An image element contained in the above container element:**

```
{
	id: "2",
	type: "image"
	design: "",
	text: "",
	parent: "1",
	children: [],
	properties: ["m-rh-40","m-rw-100","src=https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png"]
}
```

**An text element for heading contained in the above container element:**

```
{
	id: "3",
	type: "text"
	design: "",
	text: "",
	parent: "1",
	children: ["Lorem ipsum dolor sit amet, consectetur"],
	properties: ["m-rh-90","h3"]
}
```

**An text element for paragraph contained in the above container element:**

```
{
	id: "4",
	type: "text"
	design: "",
	text: "",
	parent: "1",
	children: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, mi sit amet lobortis iaculis, velit leo ultrices ipsum, vitae lobortis dui nibh vitae lacus. In commodo lacus a magna dapibus dignissim."],
	properties: ["m-rh-90","small"]
}
```

**The above-mentioned layout elements will can be used to create template which will be rendered in the above form:**

```
{
	id: 0,
	topElementId: 1,
	design: {},
	text: {},
	element: {
		1: {
			id: "1",
			type: "container"
			design: "",
			text: "",
			parent: null,
			children: ["2","3","4"],
			properties: ["m-card","d-flex","flex-column","border"]
		},
		2: {
			id: "2",
			type: "image"
			design: "",
			text: "",
			parent: "1",
			children: [],
			properties: ["m-rh-40","m-rw-100","src=https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png"]
		},
		3: {
			id: "3",
			type: "text"
			design: "",
			text: "",
			parent: "1",
			children: ["Lorem ipsum dolor sit amet, consectetur"],
			properties: ["m-rh-90","h3"]
		},
		4: {
  			id: "4",
			type: "text"
  			design: "",
  			text: "",
			parent: "1",
			children: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis, mi sit amet lobortis iaculis, velit leo ultrices ipsum, vitae lobortis dui nibh vitae lacus. In commodo lacus a magna dapibus dignissim."],
			properties: ["m-rh-90","small"]
  		}
	}
}
```
