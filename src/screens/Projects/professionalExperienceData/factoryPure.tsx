import { ProfessionalExperienceData } from "../../../helpers";
import factoryPureHomepage from "../../../_resources/images/projects/professional experience/FactoryPure homepage.webp";
import factoryPureLogo from "../../../_resources/images/projects/professional experience/FactoryPureLogo.webp";

const technologies = [
	"TypeScript",
	"JavaScript",
	"React",
	"Redux",
	"HTML",
	"CSS",
	"Tailwind",
	"Toastify",
	"Chart.js",
	"Node.js",
	"Express.js",
	"MySQL",
	"PostgreSQL",
	"GraphQL",
	"RESTful API design / development",
	"API versioning and maintenance",
	"API Security",
	"Performance monitoring / optimization",
	"UX / UI",
	"Unit Testing",
	"Accessibility",
	"EDI",
	"AWS",
	"Netlify",
	"Shopify",
	"Google APIs",
	"pdfmake",
];

export const factoryPure = new ProfessionalExperienceData(
	"Full-Stack Developer",
	"FactoryPure",
	"March 2023",
	"March 2024",
	technologies,
	`Built and maintained an internal dashboard website that integrated with Shopify to increase department efficiency.
    Built scalable software tools to be packaged and sold as a system to other Shopify companies.
    Implemented an automated EDI system to optimize communications with vendors.
    Maintained customer-facing eCommerce website.`,
	[
		{
			title: "FactoryPure Dashboard",
			summary: `Through the use of webhook services and Shopify's APIs,
            we pulled live data from Shopify and stored it in our
            own MySQL database stored on AWS servers to increase
            performance over direct requests to Shopify. Using this
            data, I created custom and intuitive tools that directly
            communicated with Shopify and allowed our departments to
            complete their tasks more efficiently. The custom tools
            expanded upon Shopify's existing functionality and
            better fit our use case than Shopify's native
            implementations.`,
			featureList: [
				{
					title: "Layout",
					features: [
						`Notification system that informs users of
									important events that are relevent to them,
									such as updates to tasks, orders, or
									returns`,
						`Request system where users can describe and
									submit development requests (features / bug
									fixes) and attach images to further detail
									their request`,
						`Light / Dark mode`,
					],
				},
				{
					title: "Searchbar",
					features: [
						`Orders show related tasks and customer info, such as customer name and contact info`,
						`Orders can be searched for by order #, customer email, or phone number`,
						`Task results show related orders that they are attached to`,
						`Tasks can be searched for by task #, or order #`,
						`Customers results have a link to the customer's last order and their information`,
						`Customers can be searched for by first name, last name, full name, email, or phone number`,
					],
				},
				{
					title: "Orders List Screen",
					features: [
						`Recreated the Shopify orders page with additional features, optimized search for better responsiveness, and more efficient space utilization`,
						`Tasks – A hoverable icon will appear if the order has any tasks related to it. Hovering the icon will give information about the tasks related to this order. The description that appears for the tasks also contains a clickable link for each Task, to facilitate navigating directly to the relevant Task`,
						`Purchase Orders – A hoverable icon will appear if any purchase orders for this order have been submitted. Hovering the icon will give information about the purchase orders that have been submitted. The description that appears for the purchase orders also contains a clickable link for each Purchase Order, to facilitate navigating directly to the relevant Purchase Order`,
						`TTC (Time To Collect) - A column has been added between the Payment Status and Fulfillment Status Columns to indicate how many days are left to collect payment from the customer (determined by how many days have passed since the customer’s payment method was authorized)`,
						`Vendors Info – An additional column that shows each item in the order’s SKU and what vendor that SKU belongs to. This is a beneficial addition because it allows FactoryPure’s customer service reps to more efficiently process orders from the Order List rather than having to load multiple individual order screens`,
						`PO (Purchase Orders) Mode – Returns only orders that need purchase orders submitted to fulfill the order. Optimizes customer service representatives order fulfillment process`,
						`Improved Note Formatting – A hoverable icon will appear if the order has notes. Hover the icon will show the notes from the order. The note formatting has been improved from Shopify to show line breaks`,
						`Filters – Allow order searches to be filtered by numerous parameters`,
						`Calendar – A calendar tool is included in the filter menu that allows users to easily search for orders by date and see how many unfulfilled orders a given day has`,
					],
				},
				{
					title: "Orders Hub Screen",
					features: [
						`Created a hub screen that houses many of the new tools (order, tasks, purchase orders, returns, notes, emails, customers, contact customers/manufacturers by email, tags, full integration with Shopify)`,
						`Location shows address + mapped name`,
						`Tracking information (links to tracking website + copies tracking number when website doesn’t automatically find the shipping order by URL params), shows status of delivery, delivery date`,
					],
				},
				{
					title: "Purchase Orders Tool",
					features: [
						`Created a tool to handle purchase orders to track and ensure customer orders are properly fulfilled`,
					],
				},
				{
					title: "Task Manager Tool",
					features: [
						`Created a task management system to allow team members to manage their duties (customer service, order fulfillment, sales, accounting)`,
					],
				},
				{
					title: "Customers List Screen",
					features: [
						`Recreated Shopify’s customer list screen`,
						`Added Tags to list view that allow customers to be sorted and searched by tags`,
					],
				},
				{
					title: "Customer Create / Edit Screen",
					features: [
						`Customers can be created or edited by this tool`,
						`Create a task or draft order for an existing customer`,
					],
				},
				{
					title: "Vendors Tool",
					features: [
						`Manage Vendor contacts`,
						`notate order fulfillment and return instructions and return policies`,
					],
				},
				{
					title: "Returns Tool",
					features: [
						`Created a tool to manage damage claim and returns`,
						`The tool created a smooth, guided workflow to handle damage claims and returns by prompting users for information about the claim/return based on previous answers`,
						`This tool also allowed you to upload relevant documents related to the claims`,
					],
				},
				{
					title: "Scrum Tool",
					features: [
						`Created a tool to manage development tasks (Linear clone)`,
					],
				},
				{
					title: "Sales Screen",
					features: [
						`Recreated the Shopify analytics screen with an emphasis on team and individual rep performance`,
						`Improved date filtering`,
						`View set sales goals and monitor team / rep progress towards those goals`,
						`See performance relative to previous periods`,
						`See a list of sales made by individual reps`,
					],
				},
				{
					title: "Goals Tool",
					features: [
						`Created a tool to allow managers to create sales goals for the team and reps to hit, and determine bonus compensation based on performance per time period`,
					],
				},
				{
					title: "Users Screen",
					features: [
						`Created a tool to create and manage user accounts`,
						`deactivate accounts`,
						`reset passwords`,
						`managing tool access`,
						`Manage user permissions (admin, superAdmin, normal/client)`,
						`Create and manage teams (sales, accounting, developer, etc.) to assign users to`,
					],
				},
				{
					title: "Login",
					features: [
						`Created a secure login system that would send alert messages when someone with an unrecognized email address was trying to log in`,
						`This system also included a secure automated password reset procedure if someone forgot their password`,
					],
				},
				{
					title: "Admin Panel Tool",
					features: [
						`Database / dashboard management tools for superadmin accounts`,
						`Email template creator/editor for customer/manufacturer emails`,
						`Created front-end database management tools to ensure that the live database matches the structure of the development database`,
						`Database info, Table info, Table indexes, Table Constraints, Views`,
					],
				},
				{
					title: "Migration Manager Tool",
					features: [
						`Propagate database updates from the development database to the live database`,
						`create / edit table structures`,
						`manage indexes / constraints`,
						`run table populating functions that pull data from external sources`,
					],
				},
				{
					title: "Developments Screen",
					features: [
						`Created a tool to manage development requests (bug fixes / feature requests)`,
						`Allow text description and image uploads to describe bugs and feature requests`,
					],
				},
				{
					title: "Email Modal",
					features: [
						`Send emails to customers / vendors`,
						`Reps could pick and choose through a list of templates or create their own custom email template to send to customers / vendors`,
						`New templates could be created on the email template creation screen`,
					],
				},
				{
					title: "ETC. React Components / Functions",
					features: [
						`Custom basic React Components to normalize and optimize development process`,
						`Calendar - Could be used to set values or to change the date range filter on requested data.`,
						`Close Button - A simple red X that you would pass an onClick handler to in order to handle closing the parent element.`,
						`Filter Menus - utilizes classes to quickly construct filters for pulled resources.`,
						`Modal - A popout modal that could be called and hold child elements without having to manually design a modal every time one was needed`,
						`React Option - element that would be used as a child of React Select or React Checkbox Select. Allowed custom styling and functionality of <select> lists`,
						`React Checkbox Select / React Select - Allowed custom styling and functionality of <select> lists`,
						`React Datalist - Allowed custom styling and functionality of <datalist> elements`,
						`UserlistDropdown - <select> list of FP user names that could be passed handler functions (populated based on the current user's permissions and access levels)`,
					],
				},
			],
		},
		{
			title: "EDI implementation",
			summary: `Implemented an Electronic Data Interchange system to automatically handle electronically transmitted
			documents to automate inventory management, invoices, purchase orders, shipments, and acknowledgements. Our
			system handled 810 (Invoice), 846 (Inventory Inquiry), 850 (Purchase Order), 855 (Purchase Order Acknowledgement), 856 (Advanced Shipping Notice), and 997 (Functional Acknowledgement) documents.`,
			featureList: [
				{
					title: "EDI Sandbox",
					features: [
						"Onboarding for new vendors",
						"Contained documentation for our accepted fields and values",
						"Could be passed test EDI documents to ensure that they complied with our standard as laid out by our documentation",
						"Incompatible fields in test documents would be highlighted and a list of accepted values would be given. A link to the relevent documentation would also be provided.",
					],
				},
				{
					title: "810 Invoice Handling",
					features: [
						"810s (Invoices) are taken in from vendors by the system and converted into a PDF for human record-keeping and error-checking.",
						"Emails are automatically sent to the appropriate personel to handle each invoice.",
						"Properly structured documents were responded to with an accepted 997.",
						"Improperly structured documents were responded to with a rejected 997.",
					],
				},
				{
					title: "846 Inventory Inquiry",
					features: [
						"846s (Inventory Inquiries) are taken in from vendors by the system and converted into a PDF for human record-keeping.",
						"Emails are automatically sent to the appropriate personel to handle each Inventory Inquiry.",
						"Inventory was automatically updated on Shopify to reflect the numbers provided in the 846.",
						"Properly structured documents were responded to with an accepted 997.",
						"Improperly structured documents were responded to with a rejected 997.",
					],
				},
				{
					title: "850 Purchase Order",
					features: [
						"850s (Purchase Orders) are sent to vendors by the system when a purchase order is made through the Purchase Order tool on FactoryPure's dashboard.",
						"Upon successful transmission (a returned accepted 997 and 855), purchase orders were marked as accepted on FactoryPure's dashboard, and an email was sent to the appropriate personel.",
					],
				},
				{
					title: "855 Purchase Order Acknowledgement",
					features: [
						"855s (Purchase Order Acknowldgement) are taken in from vendors by the system and purchase orders were marked as accepted on FactoryPure's dashboard, and an email was sent to the appropriate personel.",
						"Inventory was automatically updated on Shopify based on the numbers provided in the 850 and 855.",
						"Properly structured documents were responded to with an accepted 997.",
						"Improperly structured documents were responded to with a rejected 997.",
					],
				},
				{
					title: "856 Advanced Shipping Notice",
					features: [
						"856s (Advanced Shipping Notice) are taken in from vendors by the system and tracking information was attached to the relevent order, and an email was sent to the appropriate personel.",
						"Properly structured documents were responded to with an accepted 997.",
						"Improperly structured documents were responded to with a rejected 997.",
					],
				},
				{
					title: "997 Functional Acknowledgement",
					features: [
						"All relevent documents received by FactoryPure's EDI system are responded to with a notice of acceptance or rejection in the form of a 997.",
						"Any received 997s that carry a message of rejection cause an email to be sent to the relevent FactoryPure personel to handle the rejection reason.",
					],
				},
			],
		},
		{
			title: "FactoryPure.com",
			summary:
				"Maintained our customer-facing eCommerce website. Styled existing pages and created and styled new pages. Created new page / block components with Shopify Liquid.",
		},
	],
	factoryPureLogo,
	[{ href: "https://factorypure.com/", logo: factoryPureLogo }]
);
