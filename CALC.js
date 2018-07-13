var CALC_Module_Factory = function () {
  var CALC = {
    name: 'CALC',
    defaultElementNamespaceURI: 'http:\/\/www.vilauma.de\/edf\/Calculation',
    typeInfos: [{
        localName: 'Sources',
        typeName: null,
        propertyInfos: [{
            name: 'source',
            minOccurs: 0,
            collection: true,
            elementName: 'Source',
            typeInfo: '.Sources.Source'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.GuestRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'guestRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'GuestRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.GuestRestrictions.GuestRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.Distribution.Channel',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Hotels',
        typeName: null,
        propertyInfos: [{
            name: 'hotel',
            minOccurs: 0,
            collection: true,
            elementName: 'Hotel',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Hotels.Hotel'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.CompatibleRules.CompatibleWith',
        typeName: null,
        propertyInfos: [{
            name: 'groupId',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'GroupId'
            },
            type: 'attribute'
          }, {
            name: 'invert',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Invert'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.DateRestrictions.DateRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'applyTo',
            typeInfo: '.ApplyToEnum',
            attributeName: {
              localPart: 'ApplyTo'
            },
            type: 'attribute'
          }, {
            name: 'applyToMode',
            typeInfo: '.ApplyToModeEnum',
            attributeName: {
              localPart: 'ApplyToMode'
            },
            type: 'attribute'
          }, {
            name: 'bookingStart',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'BookingStart'
            },
            type: 'attribute'
          }, {
            name: 'bookingEnd',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'BookingEnd'
            },
            type: 'attribute'
          }, {
            name: 'minBookingOffset',
            typeInfo: 'Duration',
            attributeName: {
              localPart: 'MinBookingOffset'
            },
            type: 'attribute'
          }, {
            name: 'maxBookingOffset',
            typeInfo: 'Duration',
            attributeName: {
              localPart: 'MaxBookingOffset'
            },
            type: 'attribute'
          }, {
            name: 'start',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'Date',
            attributeName: {
              localPart: 'End'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.Appliances',
        typeName: null,
        propertyInfos: [{
            name: 'appliance',
            minOccurs: 0,
            collection: true,
            elementName: 'Appliance',
            typeInfo: '.CalculationRoot.Rules.Rule.Appliances.Appliance'
          }]
      }, {
        localName: 'Sources.Source',
        typeName: null,
        propertyInfos: [{
            name: 'id',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.RateCodes.RateCode',
        typeName: null,
        propertyInfos: [{
            name: 'customCode',
            attributeName: {
              localPart: 'CustomCode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Rounding',
        typeName: null,
        propertyInfos: [{
            name: 'appliances',
            elementName: 'Appliances',
            typeInfo: '.Rounding.Appliances'
          }, {
            name: 'mode',
            typeInfo: '.RoundingEnum',
            attributeName: {
              localPart: 'Mode'
            },
            type: 'attribute'
          }, {
            name: 'decimalPlace',
            typeInfo: 'Long',
            attributeName: {
              localPart: 'DecimalPlace'
            },
            type: 'attribute'
          }, {
            name: 'scope',
            typeInfo: '.ScopeEnum',
            attributeName: {
              localPart: 'Scope'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Calculations',
        typeName: null,
        propertyInfos: [{
            name: 'rounding',
            elementName: 'Rounding',
            typeInfo: '.Rounding'
          }, {
            name: 'calculation',
            minOccurs: 0,
            collection: true,
            elementName: 'Calculation',
            typeInfo: '.CalculationRoot.Calculations.Calculation'
          }]
      }, {
        localName: 'Rounding.Appliances',
        typeName: null,
        propertyInfos: [{
            name: 'appliance',
            required: true,
            collection: true,
            elementName: 'Appliance',
            typeInfo: '.Rounding.Appliances.Appliance'
          }]
      }, {
        localName: 'CalculationRoot.SourcePriorities.SourcePriority',
        typeName: null,
        propertyInfos: [{
            name: 'id',
            attributeName: {
              localPart: 'ID'
            },
            type: 'attribute'
          }, {
            name: 'priority',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'Priority'
            },
            type: 'attribute'
          }, {
            name: 'applyToMode',
            typeInfo: '.ApplyToModeEnum',
            attributeName: {
              localPart: 'ApplyToMode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Hotels.Hotel',
        typeName: null,
        propertyInfos: [{
            name: 'code',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }, {
            name: 'roomCode',
            attributeName: {
              localPart: 'RoomCode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.PersonTypeDefinitions.PersonTypeDefinition',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            typeInfo: '.PersonTypeDefinitionPersonTypeEnum',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'minAge',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'MinAge'
            },
            type: 'attribute'
          }, {
            name: 'maxAge',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'MaxAge'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.StayRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'stayRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'StayRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.StayRestrictions.StayRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.PriceRestrictions.PriceRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'minPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MinPrice'
            },
            type: 'attribute'
          }, {
            name: 'maxPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MaxPrice'
            },
            type: 'attribute'
          }, {
            name: 'applyTo',
            typeInfo: '.ApplianceTypeEnum',
            attributeName: {
              localPart: 'ApplyTo'
            },
            type: 'attribute'
          }, {
            name: 'applyToMode',
            typeInfo: '.PriceApplyToModeEnum',
            attributeName: {
              localPart: 'ApplyToMode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule',
        typeName: null,
        propertyInfos: [{
            name: 'distribution',
            elementName: 'Distribution',
            typeInfo: '.CalculationRoot.Rules.Rule.Distribution'
          }, {
            name: 'airportRestrictions',
            elementName: 'AirportRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.AirportRestrictions'
          }, {
            name: 'dateRestrictions',
            elementName: 'DateRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.DateRestrictions'
          }, {
            name: 'weekdayRestrictions',
            elementName: 'WeekdayRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.WeekdayRestrictions'
          }, {
            name: 'boardRestrictions',
            elementName: 'BoardRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.BoardRestrictions'
          }, {
            name: 'stayRestrictions',
            elementName: 'StayRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.StayRestrictions'
          }, {
            name: 'hotelRestrictions',
            elementName: 'HotelRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions'
          }, {
            name: 'guestRestrictions',
            elementName: 'GuestRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.GuestRestrictions'
          }, {
            name: 'flightRestrictions',
            elementName: 'FlightRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.FlightRestrictions'
          }, {
            name: 'priceRestrictions',
            elementName: 'PriceRestrictions',
            typeInfo: '.CalculationRoot.Rules.Rule.PriceRestrictions'
          }, {
            name: 'appliances',
            elementName: 'Appliances',
            typeInfo: '.CalculationRoot.Rules.Rule.Appliances'
          }, {
            name: 'compatibleRules',
            elementName: 'CompatibleRules',
            typeInfo: '.CalculationRoot.Rules.Rule.CompatibleRules'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'sortIndex',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'SortIndex'
            },
            type: 'attribute'
          }, {
            name: 'calculationName',
            attributeName: {
              localPart: 'CalculationName'
            },
            type: 'attribute'
          }, {
            name: 'combiGroupId',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'CombiGroupId'
            },
            type: 'attribute'
          }, {
            name: 'mandatory',
            typeInfo: '.MandatoryEnum',
            attributeName: {
              localPart: 'Mandatory'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.StayRestrictions.StayRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'min',
            typeInfo: 'Duration',
            attributeName: {
              localPart: 'Min'
            },
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'Duration',
            attributeName: {
              localPart: 'Max'
            },
            type: 'attribute'
          }, {
            name: 'mode',
            typeInfo: '.StayModeEnum',
            attributeName: {
              localPart: 'Mode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Calculations.Calculation.Charges.Charge.Range',
        typeName: null,
        propertyInfos: [{
            name: 'min',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Min'
            },
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Max'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Exchanges.Exchange',
        typeName: null,
        propertyInfos: [{
            name: 'rate',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'Rate'
            },
            type: 'attribute'
          }, {
            name: 'code',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.BoardRestrictions.BoardRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'code',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.AirportRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'departureAirports',
            elementName: 'DepartureAirports',
            typeInfo: '.CalculationRoot.Rules.Rule.AirportRestrictions.DepartureAirports'
          }, {
            name: 'arrivalAirports',
            elementName: 'ArrivalAirports',
            typeInfo: '.CalculationRoot.Rules.Rule.AirportRestrictions.ArrivalAirports'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.Distribution',
        typeName: null,
        propertyInfos: [{
            name: 'channel',
            minOccurs: 0,
            collection: true,
            elementName: 'Channel',
            typeInfo: '.CalculationRoot.Rules.Rule.Distribution.Channel'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.WeekdayRestrictions.WeekdayRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'applyTo',
            typeInfo: '.ApplyToWeekdayEnum',
            attributeName: {
              localPart: 'ApplyTo'
            },
            type: 'attribute'
          }, {
            name: 'mask',
            required: true,
            attributeName: {
              localPart: 'Mask'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.SourcePriorities',
        typeName: null,
        propertyInfos: [{
            name: 'sourcePriority',
            minOccurs: 0,
            collection: true,
            elementName: 'SourcePriority',
            typeInfo: '.CalculationRoot.SourcePriorities.SourcePriority'
          }, {
            name: 'conflict',
            typeInfo: '.ConflictEnum',
            attributeName: {
              localPart: 'Conflict'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Categories',
        typeName: null,
        propertyInfos: [{
            name: 'category',
            minOccurs: 0,
            collection: true,
            elementName: 'Category',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Categories.Category'
          }]
      }, {
        localName: 'CalculationRoot',
        typeName: null,
        propertyInfos: [{
            name: 'exchanges',
            elementName: 'Exchanges',
            typeInfo: '.CalculationRoot.Exchanges'
          }, {
            name: 'sourcePriorities',
            elementName: 'SourcePriorities',
            typeInfo: '.CalculationRoot.SourcePriorities'
          }, {
            name: 'personTypeDefinitions',
            elementName: 'PersonTypeDefinitions',
            typeInfo: '.CalculationRoot.PersonTypeDefinitions'
          }, {
            name: 'rules',
            required: true,
            elementName: 'Rules',
            typeInfo: '.CalculationRoot.Rules'
          }, {
            name: 'calculations',
            required: true,
            elementName: 'Calculations',
            typeInfo: '.CalculationRoot.Calculations'
          }, {
            name: 'schemaVersion',
            required: true,
            attributeName: {
              localPart: 'SchemaVersion'
            },
            type: 'attribute'
          }, {
            name: 'creationDate',
            typeInfo: 'DateTime',
            attributeName: {
              localPart: 'CreationDate'
            },
            type: 'attribute'
          }, {
            name: 'currency',
            attributeName: {
              localPart: 'Currency'
            },
            type: 'attribute'
          }, {
            name: 'tourOperatorCode',
            attributeName: {
              localPart: 'TourOperatorCode'
            },
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Calculations.Calculation',
        typeName: null,
        propertyInfos: [{
            name: 'charges',
            elementName: 'Charges',
            typeInfo: '.CalculationRoot.Calculations.Calculation.Charges'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'mode',
            typeInfo: '.ModeEnum',
            attributeName: {
              localPart: 'Mode'
            },
            type: 'attribute'
          }, {
            name: 'applyTo',
            typeInfo: '.ApplianceTypeEnum',
            attributeName: {
              localPart: 'ApplyTo'
            },
            type: 'attribute'
          }, {
            name: 'autoAppliance',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'AutoAppliance'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.AirportRestrictions.DepartureAirports',
        typeName: null,
        propertyInfos: [{
            name: 'departureAirport',
            minOccurs: 0,
            collection: true,
            elementName: 'DepartureAirport',
            typeInfo: '.CalculationRoot.Rules.Rule.AirportRestrictions.DepartureAirports.DepartureAirport'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.AirportRestrictions.ArrivalAirports.ArrivalAirport',
        typeName: null,
        propertyInfos: [{
            name: 'iataCode',
            required: true,
            attributeName: {
              localPart: 'IataCode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.FlightRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'flightRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'FlightRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.FlightRestrictions.FlightRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.FlightRestrictions.FlightRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'sources',
            elementName: 'Sources',
            typeInfo: '.Sources'
          }, {
            name: 'minPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MinPrice'
            },
            type: 'attribute'
          }, {
            name: 'maxPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MaxPrice'
            },
            type: 'attribute'
          }, {
            name: 'airline',
            attributeName: {
              localPart: 'Airline'
            },
            type: 'attribute'
          }, {
            name: 'cabinClass',
            typeInfo: '.FlightClassEnum',
            attributeName: {
              localPart: 'CabinClass'
            },
            type: 'attribute'
          }, {
            name: 'airType',
            typeInfo: '.AirTypeEnum',
            attributeName: {
              localPart: 'AirType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Calculations.Calculation.Charges',
        typeName: null,
        propertyInfos: [{
            name: 'charge',
            minOccurs: 0,
            collection: true,
            elementName: 'Charge',
            typeInfo: '.CalculationRoot.Calculations.Calculation.Charges.Charge'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.AirportRestrictions.DepartureAirports.DepartureAirport',
        typeName: null,
        propertyInfos: [{
            name: 'iataCode',
            required: true,
            attributeName: {
              localPart: 'IataCode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules',
        typeName: null,
        propertyInfos: [{
            name: 'rule',
            minOccurs: 0,
            collection: true,
            elementName: 'Rule',
            typeInfo: '.CalculationRoot.Rules.Rule'
          }]
      }, {
        localName: 'CalculationRoot.Calculations.Calculation.Charges.Charge',
        typeName: null,
        propertyInfos: [{
            name: 'range',
            elementName: 'Range',
            typeInfo: '.CalculationRoot.Calculations.Calculation.Charges.Charge.Range'
          }, {
            name: 'pricing',
            elementName: 'Pricing',
            typeInfo: '.CalculationRoot.Calculations.Calculation.Charges.Charge.Pricing'
          }, {
            name: 'id',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'Id'
            },
            type: 'attribute'
          }, {
            name: 'stayMode',
            typeInfo: '.ChargeStayModeEnum',
            attributeName: {
              localPart: 'StayMode'
            },
            type: 'attribute'
          }, {
            name: 'personMode',
            typeInfo: '.ChargePersonModeEnum',
            attributeName: {
              localPart: 'PersonMode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Exchanges',
        typeName: null,
        propertyInfos: [{
            name: 'exchange',
            minOccurs: 0,
            collection: true,
            elementName: 'Exchange',
            typeInfo: '.CalculationRoot.Exchanges.Exchange'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.BoardRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'boardRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'BoardRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.BoardRestrictions.BoardRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.GuestRestrictions.GuestRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'minPerson',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'MinPerson'
            },
            type: 'attribute'
          }, {
            name: 'maxPerson',
            typeInfo: 'UnsignedShort',
            attributeName: {
              localPart: 'MaxPerson'
            },
            type: 'attribute'
          }, {
            name: 'personType',
            typeInfo: '.PersonTypeEnum',
            attributeName: {
              localPart: 'PersonType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Rounding.Appliances.Appliance',
        typeName: null,
        propertyInfos: [{
            name: 'code',
            typeInfo: '.ApplianceCodeEnum',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.Appliances.Appliance',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            typeInfo: '.ApplianceEnum',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'minAge',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'MinAge'
            },
            type: 'attribute'
          }, {
            name: 'maxAge',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'MaxAge'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'hotelRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'HotelRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.DateRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'dateRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'DateRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.DateRestrictions.DateRestriction'
          }, {
            name: 'operator',
            typeInfo: '.OperatorEnum',
            attributeName: {
              localPart: 'Operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.RateCodes',
        typeName: null,
        propertyInfos: [{
            name: 'rateCode',
            required: true,
            collection: true,
            elementName: 'RateCode',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.RateCodes.RateCode'
          }]
      }, {
        localName: 'CalculationRoot.Calculations.Calculation.Charges.Charge.Pricing',
        typeName: null,
        propertyInfos: [{
            name: 'amount',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'Amount'
            },
            type: 'attribute'
          }, {
            name: 'percent',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Percent'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LocationType',
        propertyInfos: [{
            name: 'type',
            typeInfo: '.LocationTypeEnum',
            attributeName: {
              localPart: 'Type'
            },
            type: 'attribute'
          }, {
            name: 'code',
            attributeName: {
              localPart: 'Code'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.AirportRestrictions.ArrivalAirports',
        typeName: null,
        propertyInfos: [{
            name: 'arrivalAirport',
            minOccurs: 0,
            collection: true,
            elementName: 'ArrivalAirport',
            typeInfo: '.CalculationRoot.Rules.Rule.AirportRestrictions.ArrivalAirports.ArrivalAirport'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Locations',
        typeName: null,
        propertyInfos: [{
            name: 'location',
            minOccurs: 0,
            collection: true,
            elementName: 'Location',
            typeInfo: '.LocationType'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.WeekdayRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'weekdayRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'WeekdayRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.WeekdayRestrictions.WeekdayRestriction'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Categories.Category',
        typeName: null,
        propertyInfos: [{
            name: 'min',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Min'
            },
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'Max'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.PriceRestrictions',
        typeName: null,
        propertyInfos: [{
            name: 'priceRestriction',
            minOccurs: 0,
            collection: true,
            elementName: 'PriceRestriction',
            typeInfo: '.CalculationRoot.Rules.Rule.PriceRestrictions.PriceRestriction'
          }, {
            name: 'operator',
            typeInfo: '.OperatorEnum',
            attributeName: {
              localPart: 'Operator'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CalculationRoot.PersonTypeDefinitions',
        typeName: null,
        propertyInfos: [{
            name: 'personTypeDefinition',
            minOccurs: 0,
            collection: true,
            elementName: 'PersonTypeDefinition',
            typeInfo: '.CalculationRoot.PersonTypeDefinitions.PersonTypeDefinition'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.CompatibleRules',
        typeName: null,
        propertyInfos: [{
            name: 'compatibleWith',
            minOccurs: 0,
            collection: true,
            elementName: 'CompatibleWith',
            typeInfo: '.CalculationRoot.Rules.Rule.CompatibleRules.CompatibleWith'
          }]
      }, {
        localName: 'CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction',
        typeName: null,
        propertyInfos: [{
            name: 'locations',
            elementName: 'Locations',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Locations'
          }, {
            name: 'categories',
            elementName: 'Categories',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Categories'
          }, {
            name: 'hotels',
            elementName: 'Hotels',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.Hotels'
          }, {
            name: 'sources',
            elementName: 'Sources',
            typeInfo: '.Sources'
          }, {
            name: 'rateCodes',
            elementName: 'RateCodes',
            typeInfo: '.CalculationRoot.Rules.Rule.HotelRestrictions.HotelRestriction.RateCodes'
          }, {
            name: 'minPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MinPrice'
            },
            type: 'attribute'
          }, {
            name: 'maxPrice',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'MaxPrice'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'StayModeEnum',
        values: ['Hotel', 'Flight']
      }, {
        type: 'enumInfo',
        localName: 'ApplianceCodeEnum',
        values: ['Hotel', 'Flight', 'Total']
      }, {
        type: 'enumInfo',
        localName: 'MandatoryEnum',
        values: ['Include', 'Exclude', 'False', 'True', 'Disabled']
      }, {
        type: 'enumInfo',
        localName: 'ScopeEnum',
        values: ['Final', 'Person']
      }, {
        type: 'enumInfo',
        localName: 'ChargePersonModeEnum',
        values: ['None', 'PerPerson', 'TotalToPerson']
      }, {
        type: 'enumInfo',
        localName: 'ConflictEnum',
        values: ['None', 'Outbound']
      }, {
        type: 'enumInfo',
        localName: 'ApplyToEnum',
        values: ['Arrival', 'Stay', 'Within', 'Departure', 'StayNights']
      }, {
        type: 'enumInfo',
        localName: 'ModeEnum',
        values: ['Fix', 'AbsoluteRelative', 'RelativeAbsolute']
      }, {
        type: 'enumInfo',
        localName: 'ChargeStayModeEnum',
        values: ['None', 'Hotel', 'Flight']
      }, {
        type: 'enumInfo',
        localName: 'ApplyToModeEnum',
        values: ['Hotel', 'Flight']
      }, {
        type: 'enumInfo',
        localName: 'PersonTypeDefinitionPersonTypeEnum',
        values: ['A', 'C', 'I']
      }, {
        type: 'enumInfo',
        localName: 'AirTypeEnum',
        values: ['Charter', 'Scheduled']
      }, {
        type: 'enumInfo',
        localName: 'ApplyToWeekdayEnum',
        values: ['Arrival', 'Booking']
      }, {
        type: 'enumInfo',
        localName: 'ApplianceTypeEnum',
        values: ['TotalPrice', 'HotelPrice', 'FlightPrice', 'FlightBasePrice']
      }, {
        type: 'enumInfo',
        localName: 'RoundingEnum',
        values: ['Up', 'Down', 'Commercial', 'No']
      }, {
        type: 'enumInfo',
        localName: 'PersonTypeEnum',
        values: ['A', 'C']
      }, {
        type: 'enumInfo',
        localName: 'ApplianceEnum',
        values: ['Person']
      }, {
        type: 'enumInfo',
        localName: 'OperatorEnum',
        values: ['AND', 'OR']
      }, {
        type: 'enumInfo',
        localName: 'PriceApplyToModeEnum',
        values: ['MaxAgePerson']
      }, {
        type: 'enumInfo',
        localName: 'LocationTypeEnum',
        values: ['Country', 'Region', 'City']
      }, {
        type: 'enumInfo',
        localName: 'FlightClassEnum',
        values: ['economy', 'comfort', 'first', 'business']
      }],
    elementInfos: [{
        typeInfo: '.CalculationRoot',
        elementName: 'CalculationRoot'
      }, {
        typeInfo: '.Rounding',
        elementName: 'Rounding'
      }, {
        typeInfo: '.Sources',
        elementName: 'Sources'
      }]
  };
  return {
    CALC: CALC
  };
};
if (typeof define === 'function' && define.amd) {
  define([], CALC_Module_Factory);
}
else {
  var CALC_Module = CALC_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.CALC = CALC_Module.CALC;
  }
  else {
    var CALC = CALC_Module.CALC;
  }
}