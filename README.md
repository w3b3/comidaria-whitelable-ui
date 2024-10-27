# TODO
Day 1
- [x] Add a README.md file
- [ ] Set up your project structure (frontend framework, manifest.json, etc.)
- [ ] Create the basic UI for menu display.
- [ ] Implement the order form with quantity selection.
- [ ] Set up the dummy checkout process.

Day 2
- [ ] Implement the service worker for basic offline caching.
- [ ] Test thoroughly on your own device (and ideally another device/browser).
- [ ] Deploy

## Reminders

Key Considerations for Speed:

### No Complex Features

Resist the urge to add too much. Focus on the core flow: browse, order, "checkout."

### Hardcoded Data

Skip database setup for now. Hardcode menu data and simulate order storage.

### Minimal Styling

Keep it clean and functional. Don't get bogged down in intricate CSS.

## Frontend (Customer Facing):
- Single Page App (SPA)
- Minimalist Menu: Start with a hardcoded menu in your JavaScript. Focus on clean presentation with item names, descriptions, and prices.
- Basic Order Form: Simple quantity selection for each item. No complex customizations yet (we'll add those later).
- Dummy Checkout: For now, simulate a successful order. Don't worry about payment integration just yet.

## Backend (Restaurant Side - Super Simple):
- No Backend (for now)

[//]: # (- Order Queue: Display incoming orders in a simple list. No need for real-time updates yet.)
[//]: # (- Order Details: Click on an order to see its details. For now, just display the items and quantities in a simple list.)
[//]: # (- Order Status: Update the status of an order. For now, just have a "New" and "Complete" status.)
[//]: # (- Dummy Data: Use hardcoded data for your menu and orders. Don't worry about saving anything to a database yet.)

### All we are ignoring for now:
- No Authentication: Don't worry about user accounts or authentication. We'll add that later.
- No Error Handling: Don't worry about handling errors or edge cases. We'll add that later.
- No Testing: Don't worry about writing tests. We'll add that later.
- No Styling: Don't worry about making it look pretty. We'll add that later.
- No Deployment: Don't worry about deploying your app. We'll add that later.
- No Database: Don't worry about setting up a database. We'll add that later.
- No Real-Time Updates: Don't worry about real-time updates. We'll add that later.
- No Payment Integration: Don't worry about integrating with a payment processor. We'll add that later.
- No Customizations: Don't worry about complex customizations or special requests. We'll add that later.
- No User Accounts: Don't worry about user accounts or authentication. We'll add that later.

## Schemas and entities:

### Menu Item
- Name: String
- Description: String
- Price: Number
- Image: String (URL)
- Category: String

[//]: # (- Quantity: Number)

### Order
- Items: Array of Menu Items
- Total: Number
- Status: String (New, In Progress, Complete)
- Date: Date
- Customer: String (Name or ID)

### User
- Name: String
- Email: String

### Order Queue
- Orders: Array of Orders
- Total Orders: Number
- Total Revenue: Number

[//]: # (- Average Order Value: Number)
[//]: # (- Busiest Time: Date)
[//]: # (- Average Time to Complete: Number)
[//]: # (- Average Items per Order: Number)
[//]: # (- Average Revenue per Order: Number)
[//]: # (- Average Revenue per Hour: Number)
[//]: # (- Average Revenue per Day: Number)
[//]: # (- Average Revenue per Week: Number)
[//]: # (- Average Revenue per Month: Number)
[//]: # (- Average Revenue per Year: Number)
[//]: # (- Average Revenue per Customer: Number)
[//]: # (- Average Orders per Customer: Number)
[//]: # (- Average Items per Customer: Number)
[//]: # (- Average Revenue per Item: Number)
[//]: # (- Average Orders per Item: Number)
[//]: # (- Average Revenue per Category: Number)
[//]: # (- Average Orders per Category: Number)

### Order Details
- Order: Order
- Items: Array of Menu Items
- Total: Number

### Order Status
- Order: Order
- Status: String (New, In Progress, Complete)
- Date: Date
- User: User
- Notes: String
- Items: Array of Menu Items
- Total: Number
- Time to Complete: Number
- Revenue: Number
