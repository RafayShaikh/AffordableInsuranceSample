import React, { useState } from 'react';
import './Services.css';
import HouseIcon from '@material-ui/icons/House';
import BuildIcon from '@material-ui/icons/Build';
import ApartmentIcon from '@material-ui/icons/Apartment';
import {
  DriveEta,
  Assignment,
  Cloud,
  Business,
  TwoWheeler,
  RvHookup,
  LocalShipping,
  DirectionsBoat,
  SupervisorAccount,
  Store,
  Waves,
  BeachAccess,
  BusinessCenter,
  AttachMoney,
  LocalDrink,
  VerifiedUser,
  EventAvailable,
  AirportShuttle,
} from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';
import Typist from 'react-typist';
import { useHistory } from 'react-router';
import { add } from '../../features/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



function Services({ match }) {
  const [services, setServices] = useState([
    [
      DriveEta,
      'Auto/Trucks',
      'You always hope that you will not have to use your insurance policy, but if you are involved in an accident, you will be grateful for the protection provided by your car insurance. Auto insurance is required in most states because it keeps drivers on the road safe from the financial impact of another’s mistakes. Affordable Insurance of Texas provides clients throughout Texas with motorcycles, cars, trucks, classic cars, and custom cars insurance with a wide range of liability limits. Our large selection of coverage for vehicles even includes options for customers with driving records that may pose challenges as well.',
    ],
    [
      Business,
      'Builders Risk',
      'Special type of property insurance which indemnifies against damage to buildings while they are under construction. Builder\'s risk insurance is "coverage that protects a person\'s or organization\'s insurable interest in materials, fixtures and/or equipment being used in the construction or renovation of a building or structure should those items sustain physical loss or damage from a covered cause."',
    ],
    [
      Assignment,
      'Bonds',
      'Bond insurance is a type of insurance policy that a bond issuer purchases that guarantees the repayment of the principal and all associated interest payments to the bondholders in the event of default. Bond issuers will buy this type insurance to enhance their credit rating in order to reduce the amount of interest that it needs to pay and make the bonds more attractive to potential investors. Examples of commonly needed bonds would include: Loss Title Bonds, Surety Bonds and Performance Bonds.',
    ],
    [DirectionsBoat, 
      'Boats', 
      'Boat insurance may help cover a motorboat, bass/fishing boats, pontoon boat, powerboat, sailboat or personal watercraft if it\'s stolen, in an accident, or damaged by a covered peril like fire or lightning. Boat insurance may also help protect you if you accidentally injure someone or damage their property with your boat as well.'
    ],
    [
      LocalShipping,
      'Comercial Auto/18 Wheeler',
      'Commercial auto insurance protects small businesses when a company-owned vehicle is involved in a collision, stolen, vandalized, or otherwise damaged. For 18 wheeler insurance, it  is an insurance policy that provides coverage for your owners or operators of 18 wheeler trucks. This insurance policy comes with different options such as primary liability insurance, non-trucking liability insurance, physical damage insurance and motor cargo insurance. Minimum Insurance coverage of commercial vehicles would include: $300,000 for trucks weighing less than 10,001 lbs and transporting non-hazardous materials, $750,000 for trucks weighing at lease 1001 lbs and transporting non-hazardous materials, $1 million for trucks transporting oil or as described in a contract requirement, $5 million for trucks carrying hazardous materials, and lastly at the least all tractor-trailers that are carrying non-hazardous materials are required to obtain $300,000 of liability insurance.'
    ],
    [
      AttachMoney,
      'Comercial Cargo',
      "Motor truck cargo insurance provides insurance on the freight or commodity hauled by a for-hire trucker. It covers your liability for cargo that is lost or damaged due to causes such as fire, collision, or striking of a load. If your load is accidentally dumped on a roadway or waterway (removal expenses coverage) our coverage may cover the cost to remove debris or extra pollutants caused by the debris. Also potentially included for this coverage would be the costs related to preventing further loss to damaged cargo. (Sue and labor coverage), legal expenses in the defense or settlement of claims' and even freight charges the customer loses because of not delivering a load (Earned Freight Coverage).",
    ],
    [
      BusinessCenter,
      'Commercial General Liability',
      'Commercial general liability (CGL) is a type of insurance policy that provides coverage to a business for bodily injury, personal injury, and property damage caused by the business’s operations, products, or injuries that occur on the business’s premises.',
    ],
    [
      Store,
      'Commercial Property',
      'Commercial Property policies cover your building and all of its contents, as well as any exterior fixtures associated with your business, such as a fence or outdoor sign. The protection of your physical property and its contents extends to damages caused by fire, burst pipes, storms, vandalism, and explosions. Earthquakes and floods typically aren’t covered by commercial property insurance, these are usually covered by separate policies.',
    ],
    [
      Waves,
      'Flood',
      'Flood insurance is a type of property insurance that covers a dwelling for losses sustained by water damage specifically due to flooding caused by heavy or prolonged rain, melting snow, coastal storm surges, blocked storm drainage systems, or levee dam failure. In many places, a flood is considered a vis major event, and the damage or destruction it causes are uncovered if you do not get supplemental insurance. This coverage comes from water outside the home not from a pipe burst inside the home.',
    ],
    [
      HouseIcon,
      'Home Owners',
      "Home owners insurance, is a type of property insurance that covers a private residence.  It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one's home, it's contents, loss of use (additional living expenses) or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the hands of the homeowner within the policy territory. Additionally, homeowner's insurance provides financial protection against disasters. A standard home insurance policy insures the home itself along with the things kept inside.",
    ],
    [
      BuildIcon,
      'Inland Marine',
      'Inland Marine insurance covers the risks relating to property, property and equipment that’s either in transit (including by road or rail), held by a bailee, a fixed location that is an instrument of tranportation, and a movable type of goods that\'s often at different locations. A few example of this would be Utility trailers, business tools/portable tools, rented equipment, and more'
    ],
    [
      LocalDrink,
      'Liquor Liability',
      'Liquor liability insurance helps protect a business that sells, serves, or distributes alcohol. This type of business insurance can help cover claims of bodily injury or property damage that an intoxicated person causes after a company served them alcohol. This policy is used as a complement to your general liability commonly used for restaurants and/or bars.',
    ],
    [TwoWheeler, 
      'Motorcycle', 
      'Motorcycle insurance provides financial protection in the event of a motorcycle accident, loss, theft or damage. Motorcycle insurance includes liability coverage in case you are responsible for another person’s injuries or property damage.'
    ],
    [RvHookup, 
      'Mobile Home', 
      'Mobile insurance, is a specialized form of insurance designed to meet the unique needs of mobile home or manufactured housing owners. It provides coverage comparable to the homeowners policy, including property, loss of use, and premises and personal liability. This is an all inclusive policy which includes: fire, wind, and flood in a single policy. This policy may require underwriting approval according to the location.'
    ],
    [
      BeachAccess,
      'Mexico Coverage',
      'The coverage provided under certain nonstandard automobile policies issued by U.S. insurers for operation of an insured motor vehicle within Mexico, usually limited to a stated number of miles from the U.S. border and a stated number days outside of the U.S. In the event of incurred automobile liability, Mexican law recognizes only coverage written by Mexican insurance companies as proof of financial responsibility. This policy is an extension of your current policy in the U.S. you can have full coverage in Mexico but you must have full coverage on your domestic policy.',
    ],
    [
      AirportShuttle,
      'Recreational Vehicles',
      "RV insurance is protection of your motorcycles (Offroad bikes, i.e. Dirtbikes), boats, travel trailers, RV's, golf carts, motor homes, ATV's, jet ski's, trikes, etc. You'll choose from a variety of coverages meant to protect your vehicle and provide peace of mind on trips and vacations or if you use your RV as a permanent residence. If you're \"driving\" a motorhome, you'll also need liability coverage to stay legal on the road. But if you're \"pulling\" a travel trailer, your state won't require you to insure the RV, as you're already covered for liability on your auto insurance policy.",
    ],
    [
      ApartmentIcon,
      'Renter’s policies',
      'A renters insurance policy is a group of coverages designed to help protect renters living in a house or apartment. A typical renters insurance policy includes three types of coverage that help protect you, your belongings and your living arrangements after a covered loss. Liability is also included in these types of policies.',
    ],
    [
      EventAvailable,
      'Special Events',
      'Special event liability insurance covers short-term private events against bodily injury and property damage claims. Many venues require event organizers to carry liability insurance. This policy helps pay for medical expenses if a guest is injured at an event listed on the policy. In addition, this policy is also used to protect premises that are rented, as well as venue property that could be damage during the event, and equipment.',
    ],
    [
      VerifiedUser,
      'SR22s',
      'An SR-22 is a form that\'s filed with your state to prove that you have liability insurance meeting the minimum coverages required by law and is an endorsement required by most state Department of Motor Vehicles (DMV) offices for "high-risk" drivers. Also known as a "Certificate of Financial Responsibility," "SR-22 Bond,\" or \"SR-22 Form,\" an SR-22 isn\'t a type of insurance but rather an easy-to-get document from your state\'s department of motor vehicles.',
    ],
    [
      Cloud,
      'Windstorm',
      'Windstorm insurance is a special type of property-casualty insurance that protects policyholders from property damage caused by gales, winds, hail, tropical storms, hurricanes, and other gusty hazards. These are policies for both personal and commercial purposes.',
    ],
    [
      SupervisorAccount,
      'Workers’ Comp',
      "Workers' Comp, is a form of insurance providing wage replacement and medical benefits to employees injured in the course of employment, as well as disability benefits and death benefits. Workers’ comp also reduces your liability for work-related injuries and illnesses. Without coverage, your employees can sue you for a work-related injury or illness to help pay for their medical costs or lost wages.",
    ],
  ]);

  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (url, logo, name, text) => {
    const data = {
      insuranceLogo: <SvgIcon component={logo} />,
      insuranceName: name,
      InsuranceDescription: text,
    };
    dispatch(add(data));
    history.push(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='services_container'>
      <div className='services_description'>
        <h2>Full-Serivce Insurance Agency Serving Texas</h2>
        <h3>Whatever you can buy we can insure</h3>
        <p>
          If experience and service are important to you, you owe it to yourself
          to turn to Affordable Insurance of Texas for all your insurance needs.
          Tired of hearing about good rates you didn’t receive? Then it’s time
          for Affordable Insurance of Texas! Call us today for more information!
        </p>
      </div>
      <div className='services_selection'>
        <Typist avgTypingDelay={25} cursor={{ show: false }}>
          <h2>Select One for More Information</h2>
        </Typist>
      </div>
      <div className='services_offered'>
        {services.map((val, id) => (
          <div
            key={id}
            className='services_offeredBox'
            onClick={() =>
              clickHandler(`${match.url}/${id}`, val[0], val[1], val[2])
            }
          >
            <SvgIcon component={val[0]} />
            <h2>{val[1]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
