import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactService } from "../../../../services/ContactService";
import {
  setContactedList,
  setLoading,
  setError,
} from "../../../../redux-store/slices/ContactSlice";
import ContactCard from "./ContactCard";
import Loader from "../../../containers/loader/Loader";

const ContactedUsers = () => {
  const dispatch = useDispatch();
  const { contactedList, error, loading } = useSelector(
    (state) => state.contact
  );
  let contactedUsers = contactedList?.data;

  useEffect(() => {
    const fetchContactedList = async () => {
      dispatch(setLoading(true));
      try {
        const response = await ContactService.GetContactUs();
        dispatch(setContactedList(response.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    fetchContactedList();
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!contactedUsers?.length) {
    return <h1>No contacted users</h1>;
  }

  return (
    <>
      <ContactCard contactedUsers={contactedUsers} />
      {loading && <Loader />}
    </>
  );
};

export default ContactedUsers;
