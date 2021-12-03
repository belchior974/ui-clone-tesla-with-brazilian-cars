import { useCallback, useContext, useEffect } from "react";
import ModelContext from "./ModelContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } =
    useContext(ModelContext);

  useEffect(
    () => () => unregisterModel(modelName), //Desfaz a sujeira
    [modelName, unregisterModel]
  );

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])


    return {registerModel, getModel}
}
