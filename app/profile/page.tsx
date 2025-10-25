import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { authOptions } from "../_utils/ProviderOptions";
import { signOut } from "next-auth/react";
import SignOut from "../_components/SignOut";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  // If not logged in → redirect to login
  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>

        {user?.image && (
          <div className="flex justify-center mb-4">
            <Image
              src={user.image}
              alt={user.name ?? "User"}
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500 shadow"
            />
          </div>
        )}

        <div className="text-left space-y-3">
          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-semibold">{user?.name ?? "No name"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-semibold">{user?.email ?? "No email"}</p>
          </div>
        </div>

        <form
          action="/api/auth/signout"
          method="post"
          className="mt-8 flex justify-center"
        >
          <SignOut />
        </form>
      </div>
    </div>
  );
}
