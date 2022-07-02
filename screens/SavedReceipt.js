import React from "react";
import { View, Text } from "react-native";
import Card from "../components/ReceiptCard";
import { Box, Center, Flex, Spacer } from "native-base";
import { NativeBaseProvider } from "native-base";
import ReceiptCard from "../components/ReceiptCard";
import { Modal } from "native-base";
import axios from "axios";

export function SavedReceipt({ navigaton }) {
  const [invoices, setinvoices] = React.useState([]);
  React.useEffect(() => {
    function getData() {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://invoiceg.ganeshgouru50.workers.dev",
          {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjU2ODA1NjY1LCJzdWIiOiIzMTVjMTFhYi1kM2E2LTQ1MTAtODJlMy02N2M3MDBjYzQ3ZDIiLCJlbWFpbCI6ImdhbmVzaHllcEBlbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.ekqE8esJOPGR1d0sR3TND1_-8ySUuSN_NktdSzSkF-w",
          }
        )
        .then(function (response) {
          console.log(response.data);
          setinvoices(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getData();
  }, []);
  return (
    <Box
      flex={1}
      flexDirection="row"
      flexWrap="wrap"
      style={{ flex: 1, overflowX: "hidden" }}
    >
      {invoices.map((ele) => {
        return (
          <ReceiptCard
            key={ele.product_id}
            id={ele.product_id}
            name={ele.product_name}
            pd={ele.purchase_date}
            ed={ele.expiry_date}
          />
        );
      })}
    </Box>
  );
}
