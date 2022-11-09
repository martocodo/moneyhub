/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import AccountSection from "../../components/account-section";

import {
  Inset
} from "./style";


const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

// Helper function to format currency
const formatNumberCurrency = (value) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
};

// Calculations for dates
const today = new Date().getFullYear();
const purchaseDate = new Date(account.originalPurchasePriceDate).getFullYear();
const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice;
const sincePurchasePercentage = (sincePurchase / account.originalPurchasePrice) * 100;
const annualAppreciation = sincePurchasePercentage / (today - purchaseDate);

// Add object for all formatted details to be displayed
const formattedDetails = {
  recentValuation: formatNumberCurrency(account.recentValuation.amount),
  lastUpdate: new Date(account.lastUpdate),
  // New information for valuation changes component
  originalPrice: formatNumberCurrency(account.originalPurchasePrice),
  purchaseDate: new Date(account.originalPurchasePriceDate), // may need additional validation depending on reliability of data source
  sincePurchase: formatNumberCurrency(sincePurchase),
  sincePurchasePercentage: (Math.round(sincePurchasePercentage * 10) / 10) + '%', // round to 1 dp
  annualAppreciation: (Math.round(annualAppreciation * 10) / 10)  + '%',  // round to 1 dp
  valuationStatus: account.recentValuation.status,
}

const Detail = ({ }) => {
  let mortgage;

  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountSection
        hasHeadline={formattedDetails.recentValuation}
        label={"Estimated Value"}
        list={[
          { text: `Last updated ${format(formattedDetails.lastUpdate, "do MMM yyyy")}` },
          {
            text: `Next update ${format(
              add(formattedDetails.lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`
          },
        ]}
      />
      <AccountSection
        label={"Property details"}
        hasRow={true}
        list={[
          { text: account.name },
          { text: account.bankName },
          { text: account.postcode },
        ]}
      />
      <AccountSection
        label={"Valuation Change"}
        hasRow={true}
        list={[
          { text: `Purchased for ${formattedDetails.originalPrice} in ${format(formattedDetails.purchaseDate, "LLLL yyyy")}` },
          {
            text: `Since purchase`,
            badge: {
              value: `${formattedDetails.sincePurchase} (${formattedDetails.sincePurchasePercentage})`,
              status: formattedDetails.valuationStatus
            }
          },
          {
            text: `Annual appreciation`,
            badge: {
              value: `${formattedDetails.annualAppreciation}`,
              status: formattedDetails.valuationStatus
            }
          },
        ]}
      />
      {mortgage && (
        <AccountSection
          label={"Mortgage"}
          onClick={() => alert("You have navigated to the mortgage page")}
          list={[
            {
              text: new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(
                Math.abs(account.associatedMortgages[0].currentBalance)
              )
            },
            { text: account.associatedMortgages[0].name },
          ]}
        />
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
