import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { FaCircleNotch, FaSave, FaTrashAlt } from "react-icons/fa";
import "./Reports.css";

export const Reports = () => {
  return (
    <div className="reports">
      <h1>Report </h1>
    </div>
  );
};

export const ReportsOne = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://103.195.3.114:8081/ReaddistrictInformation")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handelSaveButton = (e) => {
    e.preventDefault();
    const personalCode = e.target.code.value;
    const address = e.target.address.value;
    const cardNo = e.target.cardNo.value;
    const mobile = e.target.mobile.value;
    const thana = e.target.thana.value;
    const marriedStatus = e.target.marriedStatus.value;
    const contactNumber = e.target.contactNumber.value;
    const age = e.target.age.value;
    const name = e.target.name.value;
    const gender = e.target.gender.value;
    const guardian = e.target.guardian.value;
    const nid = e.target.nid.value;
    const passportNumber = e.target.passportNumber.value;
    const districtName = e.target.districtName.value;
    // const data = {
    //   districtName,
    //   thana,
    // };
    const url = `http://103.195.3.114:8081/CreateDistrict?DistrictCode=${districtName}&&DistrictName=${thana}`;
    axios
      .post(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(
    //   personalCode,
    //   address,
    //   cardNo,
    //   mobile,
    //   thana,
    //   marriedStatus,
    //   contactNumber,
    //   age,
    //   name,
    //   gender,
    //   guardian,
    //   nid,
    //   passportNumber,
    //   districtName
    // );
  };

  const update = () => {
    (async () => {
      try {
        await axios.delete("http://103.195.3.114:8081/DeleteDistrict/11");
        console.log("Delete successful");
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div className="reports">
      <div className="container px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="">
              <form onSubmit={handelSaveButton} className="form-card">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6  flex-column d-flex">
                    <label className="form-control-label ">
                      Personal code<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="code"
                      name="code"
                      placeholder="personal code"
                    />
                  </div>
                  <div className="form-group col-md-6  flex-column d-flex">
                    <label className="form-control-label ">
                      Address<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Card No / Booking No
                      <span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      placeholder="Booking No"
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="mob"
                      name="mobile"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Thana<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="job"
                      name="thana"
                      placeholder="Thana"
                    />
                  </div>
                  <div className="form-group mt-3 col-sm-6 flex-colum d-flex">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="marriedStatus"
                        id="inlineRadio2"
                        value="married"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Married
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="marriedStatus"
                        id="inlineRadio3"
                        value="unmarried"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        UnMarried
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Contact Number<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="booking"
                      name="contactNumber"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Age<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="number"
                      id="mob"
                      name="age"
                      placeholder="Your age"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label ">
                      Person Name<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mt-3 col-sm-6 flex-colum d-flex">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender"
                        value="male"
                      />
                      <label className="form-check-label" htmlFor="gender">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio2"
                        value="female"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio3"
                        value="other"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex">
                    <label className="form-control-label ">
                      Guardian<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="ans"
                      name="guardian"
                      placeholder="Guardian"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex">
                    <label className="form-control-label ">
                      NID Cart Number<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="ans"
                      name="nid"
                      placeholder="Nid Number"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex">
                    <label className="form-control-label ">
                      Passport No<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="ans"
                      name="passportNumber"
                      placeholder="Passport No"
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-md-6 col-sm-12 flex-column d-flex">
                    <label className="form-control-label ">
                      District Name<span className="text-danger"> *</span>
                    </label>
                    <select
                      className="input"
                      type="text"
                      id="ans"
                      name="districtName"
                      placeholder=""
                    >
                      <option value="dhaka">Dhaka</option>
                      <option value="gazipur">Gazipur</option>
                      <option value="narsingdi">Narsingdi</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="d-flex border w-75 rounded justify-content-center p-2 px-4 mx-auto mt-4">
                    <div className="update me-1">
                      <button type="submit" className="btn border">
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaSave />
                          </div>
                          <div className="name">Save</div>
                        </div>
                      </button>
                    </div>

                    <div className="update me-2">
                      <span onClick={update} className="btn border">
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaCircleNotch />
                          </div>
                          <div className="name">Update</div>
                        </div>
                      </span>
                    </div>
                    <div className="update me-2">
                      <span className="btn border">
                        <div className="all d-flex">
                          <div className="icon me-2">
                            <FaTrashAlt />
                          </div>
                          <div className="name">Delete</div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-between text-left mb-4">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label ">
                  Search By Name<span className="text-danger"> *</span>
                </label>
                <select
                  className="input"
                  type="text"
                  id="booking"
                  name="bookingData"
                  placeholder="Booking No"
                >
                  <option>Name</option>
                  <option>name 1</option>
                  <option>name 2</option>
                  <option>name 3</option>
                  <option>name 3</option>
                  <option>name 5</option>
                  <option>name 6</option>
                  <option>name 7</option>
                </select>
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label ">
                  Search By Booking Number
                  <span className="text-danger"> *</span>
                </label>
                <input
                  className="input"
                  type="text"
                  id="mob"
                  name="mob"
                  placeholder=""
                />
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-danger">Select</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <button className="btn btn-danger">Select</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-danger">Select</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div className="reports">
      <h1>Reports/reports2</h1>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className="reports">
      <h1>Reports/reports3</h1>
    </div>
  );
};

// Api Link
// http://103.195.3.114:8081/CreateDistrict
// http://103.195.3.114:8081/ReaddistrictInformation
// http://103.195.3.114:8081/UpdatedistrictInformation
// http://103.195.3.114:8081/DeleteDistrict
