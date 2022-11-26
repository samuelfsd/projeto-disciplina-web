import { Theme, GlobalStyles} from ".";

import { Routes } from '../routes';

export const App = () =>  {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
}
