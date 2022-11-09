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

// Add object for all formatted details to be displayed
const formattedDetails = {
  recentValuation: new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(account.recentValuation.amount),
  lastUpdate: new Date(account.lastUpdate),
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
          `Last updated ${format(lastUpdate, "do MMM yyyy")}`,
          `Next update ${format(
            add(lastUpdate, { days: account.updateAfterDays }),
            "do MMM yyyy"
          )}`
        ]}
        />
      <AccountSection
        label={"Property details"}
        hasRow={true}
        list={[
          account.name,
          account.bankName,
          account.postcode,
        ]}
      />
      {mortgage && (
        <AccountSection
          label={"Mortgage"}
          onClick={() => alert("You have navigated to the mortgage page")}
          list={[
            new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(
              Math.abs(account.associatedMortgages[0].currentBalance)
            ),
            account.associatedMortgages[0].name,
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
