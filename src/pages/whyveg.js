import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';
import whyVegFlyer from '../files/WhyVeg_Flyer.pdf';

const WhyVegPage = () => (
  <Layout>
    <SEO title="Why Veg" />
    <section>
      <article className="page">
        <h2>Why Veg</h2>
        <StaticImage className="text-wrap-image page-image" alt="caloric needs" src="../images/CaloricNeeds.gif" />
        <h3>SOME REASONS TO BECOME VEGAN/VEGETARIAN:</h3>
        <h4>For the Planet</h4>
        <ol className="">
          <li>
            {' '}
            Raising animals for food generates more greenhouse gases than cars
            & trucks.
          </li>
          <li>
            {' '}
            80% of ammonia emissions in the U.S. come from animal waste.
          </li>
          <li>
            {' '}
            Farm animals produce 130 times more waste than humans in the
            United States.
            {' '}
          </li>
          <li>
            {' '}
            The #1 source of pollution in our waterways comes from
            agricultural runoff. Farm animals eat 70% of all the grain in the
            United States.
            {' '}
          </li>
          <li>
            {' '}
            It takes 2400 gallons of water to produce 1 pound of cow flesh vs.
            180 gallons of water to make 1 pound of whole wheat flour. Farm
            animals are the primary consumers of water in the United States.
            {' '}
          </li>
        </ol>
        <h4>For the Animals</h4>
        <ol className="">
          <li>
            {' '}
            Farm animals are affectionate, playful, intelligent, and unique
            individuals.
            {' '}
          </li>
          <li>
            {' '}
            Farm animals feel pain and suffer in the same way as dogs and
            cats.
            {' '}
          </li>
          <li>
            {' '}
            About 10 billion land animals are slaughtered every year in the
            USA for food.
          </li>
          <li> Pigs have higher cognitive abilities than 3 years olds.</li>
          <li>
            {' '}
            Factory farms treat animals as commodities: Animals are burned,
            castrated, mutilated, and violently killed without anesthesia.
          </li>
        </ol>
        <h4>For Your Heath</h4>
        <ol className="">
          <li> Vegetarians are 25-50% less likely to suffer from cancer.</li>
          <li>
            {' '}
            Meat eaters are 9 times more likely to be obese than vegans.
          </li>
          <li> Vegetarian diets help prevent heart disease. </li>
          <li>
            {' '}
            Vegan foods provide us with all the nutrients that we need,
            including protein.
            {' '}
          </li>
          <li>
            {' '}
            It is the position of the American Dietetic Association and
            Dietitians of Canada that appropriately planned vegetarian diets
            are healthful, nutritionally adequate and provide health benefits
            in the prevention and treatment of certain diseases.
          </li>
        </ol>
        <p className="text-center">
          <span className="italics underline">
            <a href={whyVegFlyer}>
              printer friendly version
            </a>
          </span>
        </p>

        <hr />
        <h3>REFERENCES</h3>
        <h4> For the Planet: </h4>
        <ol className=" literatureReference">
          <li>
            {' '}
            U.N. News Centre, “Rearing Cattle Produces More Greenhouse Gases
            Than Driving Cars, U.N. Report Warns,” 29 Nov. 2006.
          </li>
          <li>
            {' '}
            State of North Carolina, Department of Environment and Natural
            Resources, “Review of Emission Factors and Methodologies to
            Estimate Ammonia Emissions From Animal Waste Handling,” U.S.
            Environmental Protection Agency, Apr. 2002.
          </li>
          <li>
            <ol type="a">
              <li> Ed Ayres, “Will We Still Eat Meat?” Time 8 Nov. 1999.</li>
              <li>
                {' '}
                U.S. Senate Committee on Agriculture, Nutrition, and Forestry,
                “Animal Waste Pollution in America: An Emerging National
                Problem,” Dec. 1997.
              </li>
            </ol>
          </li>
          <li>
            <ol type="a">
              <li>
                U.S. Senate Committee on Agriculture, Nutrition, and Forestry.
                {' '}
              </li>
              <li>Food Revolution, John Robbins, 2001, p. 292</li>
            </ol>
          </li>
          <li>
            <ol type="a">
              <li>
                Marcia Kreith, “Water Inputs in California Food Production,”
                Water Education Foundation 27 Sept. 1991.
              </li>
              <li>
                {' '}
                Rick Grant, “Water Quality and Requirements for Dairy Cattle,”
                NebGuide, Cooperative Extension, Institute of Agriculture and
                Natural Resources, University of Nebraska-Lincoln, 1996.
              </li>
            </ol>
          </li>
        </ol>
        <h4>For the Animals</h4>
        <ol className=" literatureReference">
          <li>
            {' '}
            United States Department of Agriculture (USDA). National
            Agriculture Statistics Service.
            {' '}
          </li>
          <li>
            {' '}
            New Slant on Chump Chops,” Cambridge Daily News, 29 Mar. 2002.
            {' '}
          </li>
        </ol>

        <h4>For Your Health</h4>
        <ol className="">
          <li>
            {' '}
            J. Chang-Claude et al., "Mortality Pattern of German Vegetarians
            After 11 Years of Follow-Up," Epidemiology 3 (1992): 389-91.
          </li>
          <li>
            {' '}
            John Robbins, The Food Revolution, Conari Press: Boston, 2001, p.
            58.
          </li>
          <li>
            <ol type="a">
              <li>
                {' '}
                L.E. Kelemen et al., &quot;Association of Dietary Protein With
                Disease and Mortality in a Prospective Study of Postmenopausal
                Women,&quot; American Journal of Epidemiology 161 (2005): 239-49.
              </li>
              <li>
                {' '}
                Sacks FM, Castelli WP, Donner A, Kass EH. Plasma lipids and
                lipoproteins in vegetarians and controls. N Engl J Med
                1975;292:1148-52.
              </li>
            </ol>
          </li>
          <li>
            {' '}
            Hardinge, M., et al. Nutritional studies of vegetarians, Part V,
            Proteins. Journal of American Dietetic Association 1966; 48(1):27;
            and Hardinge, M., et al. Nutritional studies of vegetarians: Part
            I. Journal of Clinical Nutrition 1984; 2(2):81.
            {' '}
          </li>
          <li>
            {' '}
            Academy of Nutrition and Dietetics (formerly American Dietetic
            Association). www.eatright.org
          </li>
        </ol>

      </article>
    </section>
  </Layout>
);

export default WhyVegPage;
