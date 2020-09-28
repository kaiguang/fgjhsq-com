import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout.js";

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404: 找不到页面</h1>
      <p>此路径不存在</p>
      <Link to="/">返回主页</Link>
    </Layout>
  );
}
