import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  FormLabel,
  Image,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import logoBlack from "./assets/logo_black.png";
import logoWhite from "./assets/logo_white.png";
import { extern } from "./assets/transport_data";
import { buttonTheme } from "./components/button";
import { formLabelTheme } from "./components/formLabel";
import { radioTheme } from "./components/radio";
import { getMultiplier } from "./multiplierCalculator";
import {
  calculateExternalPrice,
  calculateInternalPrice,
  roundToDecimal,
} from "./priceCalculator";

const customTheme = extendTheme({
  components: {
    Radio: radioTheme,
    Button: buttonTheme,
    FormLabel: formLabelTheme,
  },
});

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
  const [colorMode, setColorMode] = useState("");
  const [carFrigoAdrNormalType, setCarFrigoAdrNormalType] = useState("");
  const [calculatedTransportInfo, setCalculatedTransportInfo] = useState("");
  const [showCalculatedTransportInfo, setShowCalculatedTransportInfo] =
    useState(false);

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

  useEffect(() => {
    setCarType("");
    setExternalTripType("");
    setCarTransportationType("");
    setNoOfPallets(0);
    setTripDistanceKm(0);
    setWeightOfGoods(0);
    setNoOfFloorSquareMetters(0);
    setImportingFromCountry("");
    setExportingToCountry("");
    setInternalSprinterGoodsSize("");
    setCarFrigoAdrNormalType("");
  }, [tripType]);

  useEffect(() => {
    setNoOfPallets(0);
  }, [noOfFloorSquareMetters]);

  useEffect(() => {
    setNoOfFloorSquareMetters(0);
  }, [noOfPallets]);

  const logoComponent = (
    <Box mb={"2"}>
      {colorMode === "light" ? (
        <Image src={logoBlack} alt="Logo" w={"400px"} h="auto" ml="2" />
      ) : (
        <Image src={logoWhite} alt="Logo" w={"400px"} h="auto" ml="2" />
      )}
    </Box>
  );

  const internalSprinterGoodsSizeOptions = React.useMemo(() => ({
    "0-300 kg < 3cbm": [300, 400],
    "300-900 kg < 9cbm": [400, 500],
    "900-1200 kg < 12cbm": [500, 600],
    "1200-1500 kg < 15cbm": [600, 800],
    "1500-2000 kg < 22cbm": [650, 900],
  }));

  const handleSelectionChange = (value) => {
    setTripType(value);
  };

  const handleTransportTypeChange = (value) => {
    setCarTransportationType(value);
  };
  const handleCarTypeChange = (value) => {
    setCarType(value);
  };

  const handleFrigoAdrNormalInputsChange = (value) => {
    setCarFrigoAdrNormalType(value);
  };

  const tripDistanceInKmInput = (
    <>
      <FormLabel>Distanta in km:</FormLabel>
      <NumberInput
        onChange={(value) => setTripDistanceKm(+value)}
        value={tripDistanceKm}
      >
        <NumberInputField placeholder="Distanta in km" />
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

  const frigoAdrNormalInputs = (
    <RadioGroup
      onChange={handleFrigoAdrNormalInputsChange}
      value={carFrigoAdrNormalType}
    >
      <Stack direction="row">
        <Radio value="normal">Normal</Radio>
        <Radio value="frigo">FRIGO</Radio>
        <Radio value="adr">ADR</Radio>
      </Stack>
    </RadioGroup>
  );
  const carTypeInputs = (
    <RadioGroup onChange={handleCarTypeChange} value={carType}>
      <Stack direction="row">
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
            <Radio value="grupaj">Grupaj/LFL</Radio>
          </Stack>
        </RadioGroup>
      )}
    </>
  );

  const tripTypeInternNumberInput = (
    <>
      {carType === "camion" && carTransportationType === "grupaj" && (
        <>
          <Flex gap={"2rem"}>
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
            <FormLabel>Nr Metri Patrati</FormLabel>
            <NumberInput
              onChange={(value) => setNoOfFloorSquareMetters(+value)}
              value={noOfFloorSquareMetters}
              max={13}
              min={0}
              step={1}
            >
              <NumberInputField placeholder="Nr de metiri patrati" />
            </NumberInput>
          </Flex>
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
          )
            .sort(([countryA, priceRangeA], [countryB, priceRangeB]) =>
              countryA.localeCompare(countryB)
            )
            .map(([country, priceRange]) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </Select>
      )}
    </>
  );

  const externalTripNumberInput = (
    <>
      {carType === "camion" && carTransportationType === "grupaj" && (
        <>
          <FormLabel>Metri podea</FormLabel>
          <NumberInput
            onChange={(value) => setNoOfFloorSquareMetters(+value)}
            value={noOfFloorSquareMetters}
          >
            <NumberInputField placeholder="Nr metri podea" />
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
        (noOfPallets > 0 || noOfFloorSquareMetters) &&
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

  const getTransportInfo = () => {
    let transportInfo = "";

    transportInfo += "Car type " + carType + "\n";
    transportInfo += "Car transportation type " + carTransportationType + "\n";
    transportInfo += "Trip distance km " + tripDistanceKm + "\n";
    transportInfo += "External trip type " + externalTripType + "\n";
    transportInfo += "Importing from country " + importingFromCountry + "\n";
    transportInfo += "Exporting to country " + exportingToCountry + "\n";
    transportInfo += "Weight of goods " + weightOfGoods + "\n";
    transportInfo += "No of floor metters " + noOfFloorSquareMetters + "\n";
    transportInfo += "No of pallets " + noOfPallets + "\n";
    transportInfo += "\n";
    setCalculatedTransportInfo(transportInfo);
  };

  const calculateTripPrice = (tripType) => {
    let price;
    let multiplier = getMultiplier(
      tripType,
      externalTripType,
      carFrigoAdrNormalType,
      carType,
      carTransportationType
    );
    getTransportInfo();
    if (tripType === "extern") {
      price = calculateExternalPrice(
        carType,
        carTransportationType,
        tripDistanceKm,
        externalTripType,
        importingFromCountry,
        exportingToCountry,
        weightOfGoods,
        noOfFloorSquareMetters
      );
    } else if (tripType === "intern") {
      price = calculateInternalPrice(
        carType,
        carTransportationType,
        noOfPallets,
        tripDistanceKm,
        internalSprinterGoodsSize,
        noOfFloorSquareMetters
      );
    }

    let pricesArray = price.split("-");
    let lowerPrice = pricesArray[0];
    let higherPrice = pricesArray[1];
    setPrice(
      roundToDecimal(multiplier * lowerPrice) +
        " - " +
        roundToDecimal(multiplier * higherPrice)
    );
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Center
        className="App"
        w="100vw"
        minH="100vh"
        overflow="hidden"
        position="relative"
      >
        <VStack
          w={{ base: "100%", md: "50%" }}
          gap="15px"
          boxShadow={"dark-lg"}
          px="20"
          py="10"
          borderRadius={"3xl"}
          zIndex={1}
          overflowY="auto"
          overflowX="hidden"
        >
          <ColorModeSwitcher setColorMode={setColorMode} />
          {logoComponent}
          {tripTypeRadio}
          {tripType === "intern" && (
            <>
              {carTypeInputs}
              {carType !== "" && frigoAdrNormalInputs}
              {carFrigoAdrNormalType !== "" && internalTransportionTypeInputs}
              {carTransportationType !== "" && tripTypeInternNumberInput}
              {internalInputFieldsAreValid() && (
                <Button onClick={() => calculateTripPrice(tripType)}>
                  Calculate
                </Button>
              )}
            </>
          )}
          {tripType === "extern" && (
            <>
              {externalTripTypeInputs}
              {externalTripType && carTypeInputs}
              {carType !== "" && frigoAdrNormalInputs}
              {carFrigoAdrNormalType !== "" &&
                externalCarTransportationTypeInputs}
              {carTransportationType !== "" && externalCountryInput}
              {(importingFromCountry !== "" || exportingToCountry !== "") &&
                externalTripNumberInput}
              {externalInputFieldsAreValid() && (
                <Button onClick={() => calculateTripPrice(tripType)}>
                  Calculate
                </Button>
              )}
            </>
          )}
          {price !== "" && <Text>{price}</Text>}
          {price !== "" && (
            <Text>{tripType === "intern" ? "LEI" : "EURO"}</Text>
          )}
          {price !== "" && (
            <Button
              onClick={() =>
                setShowCalculatedTransportInfo(!showCalculatedTransportInfo)
              }
            >
              Detalii Cursa
            </Button>
          )}
          {showCalculatedTransportInfo && (
            <Text whiteSpace={"pre-line"}>{calculatedTransportInfo}</Text>
          )}
        </VStack>
      </Center>
    </ChakraProvider>
  );
};
