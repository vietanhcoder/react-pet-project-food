import React from "react";
import { connect } from "react-redux";

const Profile = ({ email }) => {
  return (
    <>
      <div className="o-container">this is Profile page: {email}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    appReducers: { email },
  } = state;

  return { email };
};

export default connect(mapStateToProps, null)(Profile);
