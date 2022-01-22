# mutter-render-engine-react

This package allows to render templates where each template element is of the form:

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