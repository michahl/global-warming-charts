import DashNav from "@/app/components/DashNav";

export default function DashboardPage() {
    return (
      <div className="relative flex flex-row items-center justify-between min-h-screen">
          <DashNav />
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-[85%] max-w-xl">
                <h1 className="text-3xl font-semibold">Account Settings</h1>
                <p className="text-white/55 font-light text-sm">Manage your account settings and preferences</p>

                <form className="flex flex-col text-left mt-10 space-y-5">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium">Email</span>
                        </div>
                        <input type="email" placeholder="current@email.com" className="input input-bordered w-full" />
                    </label>
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Current Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">New Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Confirm New Password</span>
                            </div>
                            <input type="password" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col text-sm">
                            <p className="font-medium">Email notifications</p>
                            <p className="text-white/55">Receive notifications via email</p>
                        </div>
                        <input type="checkbox" id="email-notifications" name="email-notifications" className="toggle" defaultChecked/>
                    </div>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Carbon Measurement Unit</span>
                            </div>
                            <select className="select select-bordered select-sm">
                                <option>Metric (kg CO2e)</option>
                                <option>Imperial (lbs CO2e)</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="btn btn-error">Delete Account</button>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
          </div>
      </div>
    );
}