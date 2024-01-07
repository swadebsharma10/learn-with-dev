import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name ,photo,email, password)

    createUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log('create', user);
        updateUser(name, photo)
        .then(()=>{
          alert('User Created Successfully')
        })
        .catch(error =>{
          console.log(error.message)
        })
    })
    .catch(error =>{
        console.log(error.message)
    })
  };

  return (
    <section className="bg-[url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')] bg-opacity-25 bg-center bg-cover bg-no-repeat h-screen  flex justify-center items-center">
      <div className="max-w-5xl mx-auto">
        <div className="hero text-base-content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left text-primary">
              <h1 className="text-5xl font-bold">Register!</h1>
              <p className="text-xl font-bold py-6">
                Please Register First then You Access Our Site.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl border border-primary bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-center py-3 font-bold">
                Already Have An Account? please 
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
