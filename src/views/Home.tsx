import React from "react";
import Button from "@mui/material/Button";
import AvatarComponent from "../components/Avatar/Avatar";
import AlertPage from "../components/alert/Alert";
import BoxComponent from "../components/Box/Box";
import CheckBoxComponent from "../components/CheckBox/CheckBox";
import ContainerComponent from "../components/Container/Container";
import DatePickerComponent from "../components/DatePicker/DatePicker";
import DateTimePickerComponent from "../components/DateTimePicker/DateTimePicker";
import { Fab } from "@mui/material";
import GridComponent from "../components/Grid/Grid";
import IconButtonComponent from "../components/IconButton/IconButton";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import SwitchComponent from "../components/Switch/Switch";
import TabComponent from "../components/Tab/Tab";
import TextFieldComponent from "../components/TextField/TextField";
import TypographyComponent from "../components/Typography/Typography";


const Home: React.FC = () => {
  return (
    <div>
      <h1>Home teste</h1>
      <Button variant="text">Text</Button>
      <AlertPage/>
      <AvatarComponent/>
      <BoxComponent/>
      <CheckBoxComponent/>
      <ContainerComponent/>
      <DatePickerComponent/>
      <DateTimePickerComponent/>
      <Fab/>
      <GridComponent/>
      <IconButtonComponent/>
      <SnackBarComponent/>
      <SwitchComponent/>
      <TabComponent/>
      <TextFieldComponent/>
      <TypographyComponent/>
    </div>
  );
};

export default Home;