import React, { Fragment, useState } from "react";
import "./dashboard.css";
import Button from "../buttons/Buttons";
import axios from "axios";
import { GoDeviceDesktop } from 'react-icons/go';
import { IoLogoGameControllerB } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

const MeetingRooms = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className="headings">
          <p>Select a meeting room</p>
        </div>
        <div className="meetingrooms">
          <div className="roomthumbnails">
            <Marketingroom />
            <Salesroom />
            <Boardroom />
            <Techroom />
          </div>
        </div>
      </div>
    </Fragment>
  );
};





export const Marketingroom = () => {
  const [marketingroom, setMarketingRoom] = useState([]);

  const getMarketingRoom = async () => {
    try {
      const response = await axios.get("https://bookroom-server.herokuapp.com/allRooms");
      // console.log(response);
      const responseData = await response.data;
      // console.log(responseData);
      const marketingroomData = responseData[1];
      let arr = [];
      arr.push(marketingroomData);
      // console.log(arr);

      setMarketingRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="marketingbg">
      <div className="overlay">
        <p className="thumbName">Marketing Room</p>
        <Button
          name="View details"
          className="viewdetails"
          link='#'
          click={getMarketingRoom}
        />
      </div>
      {marketingroom.map((room, index) => {
        return (
          <div className='custom-modal cm-0' key={index}>
            <div onClick={() => setMarketingRoom([])} className='closebtn'>
              <AiOutlineClose />
            </div>
            <div className='modal-box'>
              <div className='roomdetails container'>
                <p className='roomheading'>{room.name}</p>
                <div className='mr-bg'> </div>
                <div className='roomdescription'>
                  <p>Room Description</p>
                  <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                    This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                  <hr />
                  <p>Amenities</p>
                  <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                  <hr />
                  <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                  <Button
                    link='/dashboard/createmeeting'
                    className='bookmeetingroom'
                    name='Book meeting room'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};





export const Salesroom = () => {
  const [salesroom, setSalesRoom] = useState([]);

  const getSalesRoom = async () => {
    try {
      const response = await axios.get("https://bookroom-server.herokuapp.com/allRooms");
      // console.log(response);
      const responseData = await response.data;
      // console.log(responseData);
      const salesroomData = responseData[0];
      let arr = [];
      arr.push(salesroomData);
      // console.log(arr);

      setSalesRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="salesbg">
      <div className="overlay">
        <p className="thumbName">Sales Room</p>
        <Button
          name="View details"
          className="viewdetails"
          click={getSalesRoom}
          link='#'
        />
      </div>
      {salesroom.map((room, index) => {
        return (
          <div className='custom-modal cm-1' key={index}>
            <div onClick={() => setSalesRoom([])} className='closebtn'>
              <AiOutlineClose />
            </div>
            <div className='modal-box'>
              <div className='roomdetails container'>
                <p className='roomheading'>{room.name}</p>
                <div className='sr-bg'> </div>
                <div className='roomdescription'>
                  <p>Room Description</p>
                  <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                    This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                  <hr />
                  <p>Amenities</p>
                  <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                  <hr />
                  <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                  <Button
                    link='/dashboard/createmeeting'
                    className='bookmeetingroom'
                    // click={}
                    name='Book meeting room'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};




export const Boardroom = () => {
  const [boardroom, setBoardRoom] = useState([]);

  const getBoardRoom = async () => {
    try {
      const response = await axios.get("https://bookroom-server.herokuapp.com/allRooms");
      // console.log(response);
      const responseData = await response.data;
      // console.log(responseData);
      const boardroomData = responseData[2];
      let arr = [];
      arr.push(boardroomData);
      // console.log(arr);

      setBoardRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="boardbg">
      <div className="overlay">
        <p className="thumbName">Board Room</p>
        <Button
          name="View details"
          className="viewdetails"
          link='#'
          click={getBoardRoom}
        />
      </div>
      {boardroom.map((room, index) => {
        return (
          <div className='custom-modal cm-2' key={index}>
            <div onClick={() => setBoardRoom([])} className='closebtn'>
              <AiOutlineClose />
            </div>
            <div className='modal-box'>
              <div className='roomdetails container'>
                <p className='roomheading'>{room.name}</p>
                <div className='br-bg'> </div>
                <div className='roomdescription'>
                  <p>Room Description</p>
                  <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                    This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                  <hr />
                  <p>Amenities</p>
                  <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                  <hr />
                  <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                  <Button
                    link='/dashboard/createmeeting'
                    className='bookmeetingroom'
                    // click={}
                    name='Book meeting room'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};




export const Techroom = () => {
  const [techroom, setTechroom] = useState([]);

  const getTechRoom = async () => {
    try {
      const response = await axios.get("https://bookroom-server.herokuapp.com/allRooms");
      // console.log(response);
      const responseData = await response.data;
      // console.log(responseData);
      const techroomData = responseData[3];
      let arr = [];
      arr.push(techroomData);
      // console.log(arr);

      setTechroom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="techbg">
      <div className="overlay">
        <p className="thumbName">Tech Room</p>
        <Button
          name="View details"
          className="viewdetails"
          link='#'
          click={getTechRoom}
        />
      </div>
      {techroom.map((room) => {
        return (
          <div className='custom-modal cm-3' key={room._id}>
            <div onClick={() => setTechroom([])} className='closebtn'>
              <AiOutlineClose />
            </div>
            <div className='modal-box'>
              <div className='roomdetails container' >
                <p className='roomheading'>{room.name}</p>
                <div className='tr-bg'> </div>
                <div className='roomdescription'>
                  <p>Room Description</p>
                  <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                    This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                  <hr />
                  <p>Amenities</p>
                  <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                  <hr />
                  <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                  <Button
                    link='/dashboard/createmeeting'
                    className='bookmeetingroom'
                    // click={}
                    name='Book meeting room'
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};





export default MeetingRooms;
