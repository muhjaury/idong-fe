import { REGISTER_ADMIN_API } from "@/constant/api";
import { ROLE } from "@/constant/role";
import { encryptData } from "@/utils/dataManipulation";
import request from "@/utils/request";

export const createAdmin = (func: any, data: any) => {
  const { setName, setEmail, setPassword, setError, setSuccess } = func;
  const { name, email, password } = data;

  const nameEnc = encryptData(name);
  const emailEnc = encryptData(email);
  const passwordEnc = encryptData(password);
  const roleEnc = encryptData(ROLE.ADMIN);

  let body = {
    data: JSON.stringify({
      name: nameEnc,
      email: emailEnc,
      password: passwordEnc,
      role: roleEnc,
    }),
  };

  request(REGISTER_ADMIN_API, "POST", null, body).then((res) => {
    if (res?.status.toLowerCase() === "success") {
      setName("");
      setEmail("");
      setPassword("");
      setSuccess("Berhasil menambahkan data");
    } else {
      setError("Data gagal ditambahkan");
    }
  });
};
