import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Fit } from "./Fit";
import * as Animatable from "react-native-animatable";
import codePush from "react-native-code-push";
let self = null;
class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: ""
    };
    self = this;
  }
  //立即更新
  static _upDate() {
    codePush.sync(
      {},
      status => {
        switch (status) {
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log("DOWNLOADING_PACKAGE");
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log(" INSTALLING_UPDATE");
            Confirm.confirm({
              icon: "success",
              msg: "更新成功！",
              okTxt: "立即重启",
              onOk: () => {
                codePush.restartApp();
              }
            });
            break;
        }
      },
      progress => {
        self.setState({
          progress: (progress.receivedBytes / progress.totalBytes) * 100 + "%"
        });
      }
    );
  }
  //检查更新
  static _checkupDate(type) {
    codePush.checkForUpdate().then(update => {
      if (!update && type !== "auto") {
        Alert.alert({
          icon: "success",
          msg: "APP已是最新版本"
        });
      } else {
        if (update.description == "expired") {
          Confirm.confirm({
            info: "fail",
            msg: "您的应用版本已更新,请前往应用商店下载新的版本",
            okTxt: "前往下载",
            onOk: () => {
              Linking.openURL("https://top.bgaa.vip");
            }
          });
        } else {
          Confirm.confirm({
            icon: "info",
            msg: "发现新版本" + update.label,
            desc: update.description,
            okTxt: "立即更新",
            onOk: () => {
              this._upDate();
            }
          });
        }
      }
    });
  }
  render() {
    return null;
  }
}
const styles = StyleSheet.create({
  mask: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  showView: {
    paddingTop: Fit(20),
    paddingBottom: Fit(20),
    paddingLeft: Fit(30),
    paddingRight: Fit(30),
    borderRadius: 4,
    backgroundColor: "#25c063",

    justifyContent: "center",
    alignItems: "center"
  },
  iconImg: {
    width: Fit(42),
    height: Fit(42)
  },
  alertMsg: {
    color: "#fff"
  }
});
module.exports = Update;
