export class Business {
  id: number;
  name: string;
  email: string;
  password: string;
  mobileno: string;
  address: string;
  cityid: string;
  pincode: string;
  title: any;
  description: any;
  status: any;

  constructor(business) {
      this.id = business.id || 0;
      this.name = business.name || "";
      this.email = business.email || "";
      this.password = business.password || "";
      this.mobileno = business.mobileno || "";
      this.address = business.address || "";
      this.cityid = business.cityid || 0;
      this.pincode = business.pincode || "";
      this.title=  business.title || "";
      this.description = business.description || "";
      this.status= business.status ||"";
  }
}
