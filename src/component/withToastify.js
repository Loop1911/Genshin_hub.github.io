import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const withToastify = (WrappedComponent) => {
  return class extends React.Component {
    showToast = (message, options) => {
      toast(message, options);
    };

    render() {
      return (
        <div>
          <WrappedComponent showToast={this.showToast} {...this.props} />
          <ToastContainer />
        </div>
      );
    }
  };
};

export default withToastify;
