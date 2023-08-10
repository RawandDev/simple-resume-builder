import UploadPhoto from "./Photo/UploadPhoto";
import CustomInput from "../CustomInput/CustomInput";

function UserDetails({ userDetails, setUserDetails, setSelectedImage }) {
  function handleChangeInput(e) {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="flex gap-4 flex-col">
      <div className="flex gap-5">
        <CustomInput
          type="text"
          onChangeHandler={handleChangeInput}
          label={{
            htmlFor: "firstName",
            text: "First Name",
          }}
          id="firstName"
          name="firstName"
          placeholder={userDetails.firstName}
        />
        <CustomInput
          type="text"
          onChangeHandler={handleChangeInput}
          label={{
            htmlFor: "lastName",
            text: "Last Name",
          }}
          id="lastName"
          name="lastName"
          placeholder={userDetails.lastName}
        />
      </div>
      <CustomInput
        type="email"
        onChangeHandler={handleChangeInput}
        label={{
          htmlFor: "email",
          text: "Email",
        }}
        id="email"
        name="email"
        placeholder={userDetails.email}
      />
      <CustomInput
        type="text"
        onChangeHandler={handleChangeInput}
        label={{
          htmlFor: "jobTitle",
          text: "Job Title",
        }}
        id="jobTitle"
        name="jobTitle"
        placeholder={userDetails.jobTitle}
      />
      <CustomInput
        type="textarea"
        onChangeHandler={handleChangeInput}
        label={{
          htmlFor: "jobTitle",
          text: "Write your bio",
        }}
        id="bio"
        name="bio"
        placeholder={userDetails.bio}
      />
      <UploadPhoto setSelectedImage={setSelectedImage} />
    </section>
  );
}

export default UserDetails;
