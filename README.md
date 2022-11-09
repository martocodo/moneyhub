# Additional Responses
1) Given more time, what other changes you would have liked to make?

- Reviewing the design post task, I've realised that there is additional formatting within the "purchased for" text line with the number being bold.
I had set this up as a string variable, so with more time I would change this to take react elements instead, so more complicated objects could be passed in as 
well as more formatting options.
- I have a number of helper functions in the index file, which ideally should be moved out into a separate "utils" file, so they can be called by other components
and have a single place to be changed, as well as reducing the chance of duplication.
- I have placeholders for the other "status" colours, (the orange and red are currently the same hex references) so I would find suitable grades of these colours
to use in a similar way to the green ones.
- I would have liked to look into the api responses for the fetching of the data - I'm curious whether the "status" of a good validation is determined by the system
at api level?

2) What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

- The green valuation is a helpful indicator but it would be useful as a user to see how that compares in general to the market, as well as historical functions. So
as a user I can expand that "since purchase" or "annual appreciation" rows to show me the year on year changes.
- Each section could have collapsible functionality - so users can toggle open or closed the rows they want to view, without being distracted by the others.
- The property details section could be integrated with a mapping resource such as Google Maps so a user could search the address to view the location or a map or
check the street view.
- Edit functions? Assuming login and authentication methods to verify the user, edit buttons could be visible on the various sections to allow the user to update
the information if it is incorrect or has been changed. Perhaps a read only and and edit view could be provided, with an easily visible toggle action between the two.
- I believe this page just covers a single property at the moment? If so, then it would be useful for a user to maybe compare these stats to other properties in their
portfolio or be able to check them against a "typical" house of similar spec in the current market, both nationally and internationally (for big property people!)
- At the moment seems to be a lot spacing in each row that isn't being used. It might be nice for the user to be able to toggle between this row view and a stacked
view which each of the boxes alongside each other. This view could also potentially make the comparison idea viable, as you could then create a list of all 
comparable properties with their stats and add additional sorting and filter capabilities based on improvements or losses.
- The interface could tie into third party services based on valuation changes - so perhaps if a valuation has declined there could be an additional helper icon or
panel that could pop up from the bottom of the screen to link the user to relevant third party services that could help with improving the value, (e.g. builders or
professional cleaners etc)

-------------------------------------------------
# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions 

1. Given more time, what other changes you would have liked to make?
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.

----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it. 

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
