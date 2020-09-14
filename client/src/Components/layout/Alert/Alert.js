import React, { useEffect } from "react";
import { connect } from "react-redux";
const Alert = ({ alert }) => {
  useEffect(() => {}, [alert]);
  return <div className="alert">{alert.msg}</div>;
};
const mapStateToProps = (state) => ({
  alert: state.alert.alert,
});

export default connect(mapStateToProps, {})(Alert);
