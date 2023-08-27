import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  FormLabel,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { extern, intern } from "./assets/transport_data";
import {
  calculateExternalPrice,
  calculateInternalPrice,
} from "./priceCalculator";

export const App = () => {
  const [tripType, setTripType] = useState(""); // intern/extern
  const [carType, setCarType] = useState(""); // camion/sprinter
  const [externalTripType, setExternalTripType] = useState(""); // import/export
  const [carTransportationType, setCarTransportationType] = useState(""); // grupaj/complet
  const [noOfPallets, setNoOfPallets] = useState(0); // nr de paleti
  const [tripDistanceKm, setTripDistanceKm] = useState(0); // distanta in km
  const [weightOfGoods, setWeightOfGoods] = useState(0); // greutatea marfii
  const [noOfFloorSquareMetters, setNoOfFloorSquareMetters] = useState(0); // nr de mp pe podea
  const [importingFromCountry, setImportingFromCountry] = useState(""); // tara de import
  const [exportingToCountry, setExportingToCountry] = useState(""); // tara de export
  const [internalSprinterGoodsSize, setInternalSprinterGoodsSize] =
    useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setPrice("");
  }, [
    tripType,
    carType,
    externalTripType,
    carTransportationType,
    noOfPallets,
    tripDistanceKm,
    weightOfGoods,
    noOfFloorSquareMetters,
    importingFromCountry,
    exportingToCountry,
    internalSprinterGoodsSize,
  ]);

  const internalSprinterGoodsSizeOptions = {
    "0-300 kg < 3cbm": [300, 400],
    "300-900 kg < 9cbm": [400, 500],
    "900-1200 kg < 12cbm": [500, 600],
    "1200-1500 kg < 15cbm": [600, 800],
    "1500-2000 kg < 22cbm": [650, 900],
  };

  const handleSelectionChange = (value) => {
    setTripType(value);
  };

  const handleTransportTypeChange = (value) => {
    setCarTransportationType(value);
  };
  const handleCarTypeChange = (value) => {
    setCarType(value);
  };

  const tripDistanceInKmInput = (
    <>
      <FormLabel>Nr kilometri</FormLabel>
      <NumberInput
        onChange={(value) => setTripDistanceKm(+value)}
        value={tripDistanceKm}
      >
        <NumberInputField placeholder="Nr kilometri" />
      </NumberInput>
    </>
  );

  const tripTypeRadio = (
    <RadioGroup onChange={handleSelectionChange} value={tripType}>
      <Stack direction="row">
        <Radio value="intern">Intern</Radio>
        <Radio value="extern">Extern</Radio>
      </Stack>
    </RadioGroup>
  );

  const carTypeInputs = (
    <RadioGroup onChange={handleCarTypeChange} value={carType}>
      <Stack direction="row" mb={4}>
        <Radio value="camion">Camion</Radio>
        <Radio value="sprinter">Sprinter</Radio>
      </Stack>
    </RadioGroup>
  );
  const internalTransportionTypeInputs = (
    <>
      {carType === "camion" && (
        <RadioGroup
          onChange={handleTransportTypeChange}
          value={carTransportationType}
        >
          <Stack direction="row">
            <Radio value="complet">Complet/FTL</Radio>
            <Radio value="grupaj">Grupaj</Radio>
          </Stack>
        </RadioGroup>
      )}
      {carType === "sprinter" && (
        <RadioGroup
          onChange={handleTransportTypeChange}
          value={carTransportationType}
        >
          <Stack direction="row">
            <Radio value="complet">Complet</Radio>
            <Radio value="ltl">LTL</Radio>
          </Stack>
        </RadioGroup>
      )}
    </>
  );

  const externalTripTypeInputs = (
    <RadioGroup
      onChange={(v) => setExternalTripType(v)}
      value={externalTripType}
    >
      <Stack direction="row">
        <Radio value="import">Import</Radio>
        <Radio value="export">Export</Radio>
      </Stack>
    </RadioGroup>
  );

  const externalCarTransportationTypeInputs = (
    <>
      {carType === "camion" && (
        <RadioGroup
          onChange={handleTransportTypeChange}
          value={carTransportationType}
        >
          <Stack direction="row">
            <Radio value="complet">Complet</Radio>
            <Radio value="grupaj">Grupaj</Radio>
          </Stack>
        </RadioGroup>
      )}
      {carType === "sprinter" && (
        <RadioGroup
          onChange={handleTransportTypeChange}
          value={carTransportationType}
        >
          <Stack direction="row">
            <Radio value="complet">Complet</Radio>
            <Radio value="grupaj">Grupaj</Radio>
          </Stack>
        </RadioGroup>
      )}
    </>
  );

  const tripTypeInternNumberInput = (
    <>
      {carType === "camion" && carTransportationType === "grupaj" && (
        <>
          <FormLabel>Nr Paleti</FormLabel>
          <NumberInput
            onChange={(value) => setNoOfPallets(+value)}
            value={noOfPallets}
            min={0}
            max={33}
            step={1}
          >
            <NumberInputField placeholder="Nr de paleti" />
          </NumberInput>
          {tripDistanceInKmInput}
        </>
      )}
      {carType === "camion" &&
        carTransportationType === "complet" &&
        tripDistanceInKmInput}
      {carType === "sprinter" &&
        carTransportationType === "complet" &&
        tripDistanceInKmInput}
      {carType === "sprinter" && carTransportationType === "ltl" && (
        <>
          <FormLabel>Cantitate Marfa</FormLabel>
          <RadioGroup
            onChange={(v) => setInternalSprinterGoodsSize(v)}
            value={internalSprinterGoodsSize}
          >
            <Stack direction="row">
              {Object.entries(internalSprinterGoodsSizeOptions).map(
                ([size, priceRange]) => {
                  return (
                    <Radio value={size} key={size}>
                      {size}
                    </Radio>
                  );
                }
              )}
            </Stack>
          </RadioGroup>
          {tripDistanceInKmInput}
        </>
      )}
    </>
  );

  const externalCountryInput = (
    <>
      {externalTripType && carType && carTransportationType && (
        <Select
          placeholder="Select a country"
          onChange={(v) => {
            if (externalTripType === "import") {
              setImportingFromCountry(v.target.value);
            } else {
              setExportingToCountry(v.target.value);
            }
          }}
          value={
            importingFromCountry !== ""
              ? importingFromCountry
              : exportingToCountry
          }
        >
          {Object.entries(
            extern[externalTripType][carType][carTransportationType]
          ).map(([country, priceRange]) => (
            <option value={country}>{country}</option>
          ))}
        </Select>
      )}
    </>
  );

  const externalTripNumberInput = (
    <>
      {carType === "camion" && carTransportationType === "grupaj" && (
        <>
          <FormLabel>Metrii podea</FormLabel>
          <NumberInput
            onChange={(value) => setNoOfFloorSquareMetters(+value)}
            value={noOfFloorSquareMetters}
          >
            <NumberInputField placeholder="Nr metrii podea" />
          </NumberInput>
        </>
      )}
      {carType === "camion" &&
        carTransportationType === "complet" &&
        tripDistanceInKmInput}
      {carType === "sprinter" &&
        carTransportationType === "complet" &&
        tripDistanceInKmInput}
      {carType === "sprinter" && carTransportationType === "grupaj" && (
        <>
          <FormLabel>Cantitate marfa kg</FormLabel>
          <NumberInput
            onChange={(value) => setWeightOfGoods(+value)}
            value={weightOfGoods}
          >
            <NumberInputField placeholder="Cantitate marfa kg" />
          </NumberInput>
        </>
      )}
    </>
  );

  console.log(
    internalSprinterGoodsSize,
    tripDistanceKm,
    carType,
    carTransportationType
  );

  const internalInputFieldsAreValid = () => {
    return (
      (carType === "camion" &&
        carTransportationType === "grupaj" &&
        noOfPallets > 0 &&
        tripDistanceKm > 0) ||
      (carType === "camion" &&
        carTransportationType === "complet" &&
        tripDistanceKm > 0) ||
      (carType === "sprinter" &&
        carTransportationType === "complet" &&
        tripDistanceKm > 0) ||
      (carType === "sprinter" &&
        carTransportationType === "ltl" &&
        internalSprinterGoodsSize !== "" &&
        tripDistanceKm > 0)
    );
  };

  const externalInputFieldsAreValid = () => {
    return (
      (carType === "camion" &&
        carTransportationType === "grupaj" &&
        noOfFloorSquareMetters) ||
      (carType === "camion" &&
        carTransportationType === "complet" &&
        tripDistanceKm > 0) ||
      (carType === "sprinter" &&
        carTransportationType === "complet" &&
        tripDistanceKm > 0) ||
      (carType === "sprinter" &&
        carTransportationType === "grupaj" &&
        weightOfGoods > 0)
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Center className="App" w="100vw" h="100vh" overflow="hidden">
        <VStack
          w={{ base: "100%", md: "50%" }}
          gap="10px"
          boxShadow={"dark-lg"}
          px="20"
          py="10"
          borderRadius={"3xl"}
        >
          <Text fontFamily={""} textAlign={"center"} fontSize="5xl">
            Transportation Calculator
          </Text>
          <ColorModeSwitcher />
          {tripTypeRadio}
          {tripType === "intern" && (
            <>
              {carTypeInputs}
              {carType !== "" && internalTransportionTypeInputs}
              {carTransportationType !== "" && tripTypeInternNumberInput}
              {internalInputFieldsAreValid() && (
                <Button
                  onClick={() =>
                    setPrice(
                      calculateInternalPrice(
                        carType,
                        carTransportationType,
                        noOfPallets,
                        tripDistanceKm,
                        internalSprinterGoodsSize
                      )
                    )
                  }
                >
                  Calculate
                </Button>
              )}
            </>
          )}
          {tripType === "extern" && (
            <>
              {externalTripTypeInputs}
              {externalTripType && carTypeInputs}
              {carType !== "" && externalCarTransportationTypeInputs}
              {carTransportationType !== "" && externalCountryInput}
              {(importingFromCountry !== "" || exportingToCountry !== "") &&
                externalTripNumberInput}
              {externalInputFieldsAreValid() && (
                <Button
                  onClick={() =>
                    setPrice(
                      calculateExternalPrice(
                        carType,
                        carTransportationType,
                        tripDistanceKm,
                        externalTripType,
                        importingFromCountry,
                        exportingToCountry,
                        weightOfGoods,
                        noOfFloorSquareMetters
                      )
                    )
                  }
                >
                  Calculate
                </Button>
              )}
            </>
          )}
          {price !== "" && <Text>{price}</Text>}
          {price !== "" && (
            <Text>{tripType === "intern" ? "LEI" : "EURO"}</Text>
          )}
          {errorMessage}
        </VStack>
      </Center>
    </ChakraProvider>
  );
};
