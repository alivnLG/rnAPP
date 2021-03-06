import React, { Component } from "react";
import { Dimensions, AsyncStorage, PixelRatio, Platform } from "react-native";
// 项目中的图片可以通过Images.xxx 获取
import { Images } from "../Resources/index";
// 统一管理项目中的路由
import { Actions } from "react-native-router-flux";
// 处理安卓，iOS适配
import { Fit, STATUSBAR_HEIGHT,isIphoneX} from "./Fit";
// teaset中提供的一些常用方法
import { Theme, Toast } from "teaset";
// 基于axios网络请求
import Axios from "./Axios";
//realm本地存储
import Store from "./Store";
// TradePannel弹框
import TradePannel from "./TradePannel";
// 热更新APP
import Update from "./Update";
// Alert弹框
import Alert from "./Alert";
//Confirm弹窗
import Confirm from "./Confirm";
// 配置文件，可以放网络请求等
import Config from "./Config";
// 通过系统API获得屏幕宽高
let { height, width } = Dimensions.get("window");
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 系统是iOS
global.iOS = Platform.OS === "ios";
// 系统是安卓
global.Android = Platform.OS === "android";
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 屏幕适配
global.Fit = Fit;
//状态栏高度
global.STATUSBAR_HEIGHT = STATUSBAR_HEIGHT;
//判断是否为iphonex
global.isIphoneX = isIphoneX;
// 主题
global.Theme = Theme;
// 网络请求
global.Axios = Axios;
//realm本地存储
global.Store = Store;
//TradePannel弹窗
global.TradePannel = TradePannel;
//热更新APP
global.Update = Update;
//Alert弹窗
global.Alert = Alert;
//Confirm弹窗
global.Confirm = Confirm;
// 配置
global.Config = Config;
// router跳转的方法
global.Actions = Actions;
// 图片加载
global.Images = Images;
// 存储
global.AsyncStorage = AsyncStorage;
// 弹框Toast
global.Toast = Toast;
