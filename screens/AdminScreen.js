import React from "react";
import { View, Text } from "react-native";
import Card from "../components/ReceiptCard";
import { Box, Center, Flex, Spacer, ScrollView } from "native-base";
import { NativeBaseProvider } from "native-base";
import ReceiptCard from "../components/ReceiptCard";
import { Modal } from "native-base";
import axios from "axios";
import AdminCard from "../components/AdminCard";

export default function AdminScreen({ navigaton }) {
  const [warrants, setwarrants] = React.useState([]);
  React.useEffect(() => {
    function getData() {
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://invoiceg.ganeshgouru50.workers.dev",
          {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjU2ODUyMTk4LCJzdWIiOiI4MzMyMWU5Yi0wMGViLTQ5MTAtYjcxZC1mOTVlYTVmZTEyYzkiLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.hlqEvjgBdenX57ZHsHHICa5_vFgQhKptd4MSLTtFzd8",
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
          console.log(response.data.list);
          setwarrants(response.data.list);
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
          {warrants.map((ele) => {
            return (
              <AdminCard
                key={ele.id}
                id={ele.product_id}
                name={ele.desc}
                pd={ele.created_at}
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
        {warrants.map((ele) => {
          return (
            <AdminCard
              key={ele.id}
              id={ele.product_id}
              name={ele.desc}
              pd={ele.created_at}
            />
          );
        })}
      </Box>
      <Text color="white">You are not authorized to view this page</Text>
    </>
  );
}
