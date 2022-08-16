import React, { Fragment, memo, useState } from "react";
import BreakLine from "../../../Entities/BreakLine";
import Button from "../../../Entities/Button";
import Input from "../../../Entities/Input";
import Label from "../../../Entities/Label";
import Margin from "../../../Entities/Margin";
import "./PopupAuthentication.sass";
import axios from "axios";
import { SERVER_URL } from "../../../../config/config";
import Cookie from "js-cookie";

const PopupAuthentication = (props) => {
  // eslint-disable-next-line
  const [info, setInfo] = useState(() => {});
  const [account, setAccount] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [name, setName] = useState(() => "");
  const [email, setEmail] = useState(() => "");
  const [phoneNumber, setPhoneNumber] = useState(() => "");
  const [confirmPassword, setConfirmPassword] = useState(() => "");
  const [isWrong, setIsWrong] = useState(() => undefined);
  const login = async () => {
    const res = await axios({
      url: `${SERVER_URL}/login`,
      method: "post",
      headers: {
        'authorization': `Bearer ${Cookie.get("uid")}`
      },
      data: {
        account: account,
        password: password,
      },
    });
    const result = await res.data;
    if (result?.token?.length > 0) {
      Cookie.set("uid", result.token);
      sessionStorage.setItem("uid", result.token)
      sessionStorage.setItem("account", result.user.account)
      sessionStorage.setItem("coin", result.user.coin)
      setIsWrong(() => false);
      props.handleClose()
      window.location.reload()
    } else {
      setIsWrong(() => true);
    }
  };
  return (
    <div className="popup-authentication">
      {props.is_login === true && (
        <Fragment>
          <TitleAuthentication title={"Đăng nhập"} {...props} />
          {/*  */}
          <BreakLine />
          <Label className="label-1" text={"Tên đăng nhập"} />
          <BreakLine />
          <Input
            value={account}
            setValue={setAccount}
            className="inp-1"
            placeholder={"Nhập email của bạn hoặc tên tài khoản"}
            type={"text"}
          />
          {/*  */}
          <Margin />
          <Label className="label-1" text={"Mật khẩu"} />
          <BreakLine />
          <Input
            value={password}
            setValue={setPassword}
            className="inp-1"
            placeholder={"Nhập mật khẩu"}
            type={"password"}
          />
          <BreakLine />
          {isWrong === true && (
            <>
              <br />
              <div style={{ margin: "16px 0", color: "red" }}>
                Tài khoản hoặc mật khẩu không chính xác
              </div>
              <br />
            </>
          )}
          <div
            className={"dkslsjaskljeiowaas"}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "16px 0",
            }}
          >
            <Button
              className="sakslaskaporsked djhsdhkjlasase"
              text={"Đăng nhập"}
              onClick={() => login()}
            />
          </div>
        </Fragment>
      )}
      {props.is_signup === true && (
        <Fragment>
          <TitleAuthentication title={"Đăng ký"} {...props} />
          {/*  */}
          <BreakLine />
          <Label className="label-1" text={"Tên đăng nhập"} />
          <BreakLine />
          <Input
            value={account}
            setValue={setAccount}
            className="inp-1"
            placeholder={"Nhập email của bạn hoặc tên tài khoản"}
            type={"text"}
          />
          {/*  */}
          <Margin />
          <Label className="label-1" text={"Họ tên"} />
          <BreakLine />
          <Input
            value={name}
            setValue={setName}
            className="inp-1"
            placeholder={"Nhập họ tên"}
            type={"text"}
          />
          {/*  */}
          <Margin />
          <Label
            email={email}
            setValue={setEmail}
            className="label-1"
            text={"Địa chỉ email"}
          />
          <BreakLine />
          <Input
            className="inp-1"
            placeholder={"Nhập địa chỉ email"}
            type={"email"}
          />
          {/*  */}
          <Margin />
          <Label className="label-1" text={"Số điện thoại"} />
          <BreakLine />
          <Input
            value={phoneNumber}
            setValue={setPhoneNumber}
            className="inp-1"
            placeholder={"Nhập số điện thoại"}
            type={"text"}
          />
          {/*  */}
          <Margin />
          <Label className="label-1" text={"Nhập mật khẩu"} />
          <BreakLine />
          <Input
            value={password}
            setValue={setPassword}
            className="inp-1"
            placeholder={"Nhập mật khẩu"}
            type={"password"}
          />
          {/*  */}
          <Margin />
          <Label className="label-1" text={"Nhập lại mật khẩu"} />
          <BreakLine />
          <Input
            value={confirmPassword}
            setValue={setConfirmPassword}
            className="inp-1"
            placeholder={"Nhập lại mật khẩu"}
            type={"password"}
          />
          <div
            className={"dkslsjaskljeiowaas"}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "16px 0",
            }}
          >
            <Button
              className="sakslaskaporsked djhsdhkjlasase"
              text={"Đăng ký"}
              onClick={() => console.log(1234)}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PopupAuthentication;

export const TitleAuthentication = memo((props) => {
  return <div className="title">{props?.title}</div>;
});
