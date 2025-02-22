import PropTypes from "prop-types";
import { Button } from "./styles";

function DefaultMyButton({ children, theme, ...props }) {
  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}
DefaultMyButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultMyButton;
