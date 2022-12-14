import axios from "axios";
import { ENV } from "../utils";

const JUSOURL = "https://www.juso.go.kr/addrlink/addrLinkApi.do";

/*
https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIyMTIxNDAxMzcxNjExMzMzNTE=&currentPage=1&countPerPage=100&keyword=양천구 오목로&resultType=json
*/

export const getJuso = async (keyword) =>
  await axios.get(JUSOURL, {
    params: {
      confmKey: ENV["JUSO_API_KEY"],
      currentPage: 1,
      countPerPage: 100,
      keyword,
      resultType: "json",
    },
  });
