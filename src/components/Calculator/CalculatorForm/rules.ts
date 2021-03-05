import {
  NAME_AMMOUNT,
  NAME_INSTALLMENTS,
  NAME_MDR
} from "@components/Calculator/constants";

interface IRules {
  [key: string]: (value: number) => boolean;
}

const aMillion = 100000000;

const rules: IRules = {
  [NAME_AMMOUNT]: value => value === 0 || value > aMillion,
  [NAME_INSTALLMENTS]: value => value === 0 || value > 12,
  [NAME_MDR]: value => value === 0 || value > 100
};

export default rules;
