import { useState, useEffect } from "react";
import { CreateCategoryInput, CreateCategoryMutation } from "@/src/API";
import { API } from "aws-amplify";
import { createCategory } from "@/src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

/**
 * モックにて仮のカテゴリーのデータを作成する(本番つなぎこみの時に削除する)
 */
export const useCreateCategory = () => {
  const [categories, setCategories] :any[]= useState([]);


  useEffect(() => {
    const createInput: CreateCategoryInput = {
      name: "typescript",
    };
    const request = async () => {
      await new Promise(r => API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createCategory,
        variables: {
          input: createInput,
        },
      })) as { data: CreateCategoryMutation; errors: any[] };
      console.log('side effect!');
    };
    request();
  }, []);





  // useEffect(() =>{
  //   try {
  //     const createInput: CreateCategoryInput = {
  //       name: "typescript",
  //     };
  
  //     const request = (await API.graphql({
  //       authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  //       query: createCategory,
  //       variables: {
  //         input: createInput,
  //       },
  //     })) as { data: CreateCategoryMutation; errors: any[] };
  //     console.log("request",request)
  //     setCategories([...categories,request.data])
  //   } catch ({ errors }) {
  //     console.error(...errors);
  //     throw new Error(errors[0].message);
  //   }
  // }, []);





  return categories;
};