import React from "react";
import { View, Text } from "react-native";
import Card from "../components/ReceiptCard";
import { Box, Center, Flex, Spacer, ScrollView } from "native-base";
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
          "https://proxyinvoicebill.herokuapp.com/https://invoiceg.ganeshgouru50.workers.dev",
          {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjU2ODQ2MzAwLCJzdWIiOiIzMTVjMTFhYi1kM2E2LTQ1MTAtODJlMy02N2M3MDBjYzQ3ZDIiLCJlbWFpbCI6ImdhbmVzaHllcEBlbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.1dUJJDJZSNIvIf0MQjBCq9t-KT8K6rlOYG7_akRbfYE",
          },
          {
            headers: {
              "access-control-allow-origin": "*",
              origin: "*",
            },
          }
        )
        .then(function (response) {
          if (response.data == false) {
            return;
          }
          console.log(response.data);
          setinvoices(response.data.list);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
    getData();
  }, []);
  return (
    <>
      <Box
        _web={{
          overflowX: "hidden",
          display: "none",
        }}
        flex={1}
        flexDirection="row"
        mx={{
          base: 5,
          md: 20,
        }}
        flexWrap="wrap"
        justifyContent={{
          md: "space-between",
          base: "center",
        }}
        alignItems="center"
        style={{ flex: 1, overflowX: "hidden" }}
      >
        <ScrollView
          h="auto"
          w={{
            base: "100",
            md: "0",
          }}
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
        </ScrollView>
      </Box>

      <Box
        _android={{
          display: "none",
        }}
        flex={1}
        flexDirection="row"
        mx={{
          base: 5,
          md: 20,
        }}
        flexWrap="wrap"
        justifyContent={{
          md: "space-between",
          base: "center",
        }}
        alignItems="center"
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
    </>
  );
}
