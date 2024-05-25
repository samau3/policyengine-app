import ImpactChart from "../ImpactChart";
import Plot from "react-plotly.js";
import style from "../../../../style";
import { formatCurrencyAbbr, localeCode } from "../../../../lang/format";
import { ChartLogo } from "../../../../api/charts";
import { plotLayoutFont } from "../utils";

export function LabourSupplyDecileIncome(props) {

  const { 
    title,
    incomeChanges,
    countryId,
    description,
    yAxisTitle,
  } = props;

  return (
    <ImpactChart
      title={title}
    >
      {
        <Plot
          data={[
            {
              type: "bar",
              x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: incomeChanges,
              marker: {
                color: incomeChanges.map((value) =>
                  value < 0 ? style.colors.DARK_GRAY : style.colors.BLUE,
                ),
              },
              text: incomeChanges.map(
                (value) =>
                  (value >= 0 ? "+" : "") +
                  formatCurrencyAbbr(value, countryId, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }),
              ),
              name: "Income effect",
            },
          ]}
          layout={{
            xaxis: {
              title: "Household income decile",
              tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            yaxis: {
              title: yAxisTitle,
              tickformat: "$,.0f",
              fixedrange: true,
            },
            uniformtext: {
              mode: "hide",
              minsize: 12,
            },
            ...ChartLogo(0.97, -0.15),
            margin: {
              t: 0,
              b: 100,
              r: 0,
            },
            height: 500,
            ...plotLayoutFont,
          }}
          config={{
            displayModeBar: false,
            responsive: true,
            locale: localeCode(countryId),
          }}
          style={{
            width: "100%",
          }}
        />
      }
      <p>
        {description}
      </p>
    </ImpactChart>
  );
}

export function LabourSupplyDecileSubstitution(props) {

  const {
    title,
    substitutionChanges,
    yAxisTitle,
    countryId,
    description
  } = props;

  return (
    <ImpactChart
      title={title}
      // title={`${policyLabel}'s substitution effect-driven absolute labor supply impact by decile`}
    >
      {
        <Plot
          data={[
            {
              type: "bar",
              x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: substitutionChanges,
              marker: {
                color: substitutionChanges.map((value) =>
                  value < 0 ? style.colors.DARK_GRAY : style.colors.BLUE,
                ),
              },
              text: substitutionChanges.map(
                (value) =>
                  (value >= 0 ? "+" : "") +
                  formatCurrencyAbbr(value, countryId, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }),
              ),
              name: "Substitution effect",
            },
          ]}
          layout={{
            xaxis: {
              title: "Household income decile",
              tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            yaxis: {
              title: yAxisTitle,
              tickformat: "$,.0f",
              fixedrange: true,
            },
            uniformtext: {
              mode: "hide",
              minsize: 12,
            },
            ...ChartLogo(0.97, -0.15),
            margin: {
              t: 0,
              b: 100,
              r: 0,
            },
            height: 500,
            ...plotLayoutFont,
          }}
          config={{
            displayModeBar: false,
            responsive: true,
            locale: localeCode(countryId),
          }}
          style={{
            width: "100%",
          }}
        />
      }
      <p>
        {description}
        {/*
        This chart shows the estimated substitution effect-driven 
        absolute change in earnings (in {`${countryId === "uk" ? "pounds" : "dollars"}`}) 
        for each disposable income decile.
    */}
      </p>
    </ImpactChart>
  );
}

export function LabourSupplyDecileTotal(props) {

  const {
    title,
    yAxisTitle,
    description,
    countryId,
    overallChange
  } = props;

  return (
    <ImpactChart
      title={title}
      // title={`${policyLabel}'s absolute labor supply impact by decile`}
    >
      {
        <Plot
          data={[
            // Scattered points (square) for overall change
            {
              type: "line",
              x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: overallChange,
              mode: "markers+lines",
              // line should be the same color as the marker
              line: {
                color: style.colors.TEAL_ACCENT,
              },
              marker: {
                color: style.colors.TEAL_ACCENT,
                size: 10,
                symbol: "diamond",
                // white border to distinguish
                line: {
                  color: "white",
                  width: 1,
                },
              },
              text: overallChange.map(
                (value) =>
                  (value >= 0 ? "+" : "") +
                  formatCurrencyAbbr(value, countryId, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }),
              ),
              name: "Overall change",
            },
          ]}
          layout={{
            xaxis: {
              title: "Household income decile",
              tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            yaxis: {
              title: yAxisTitle,
              tickformat: "$,.0f",
              fixedrange: true,
            },
            uniformtext: {
              mode: "hide",
              minsize: 12,
            },
            ...ChartLogo(0.97, -0.15),
            margin: {
              t: 0,
              b: 100,
              r: 0,
            },
            height: 500,
            ...plotLayoutFont,
          }}
          config={{
            displayModeBar: false,
            responsive: true,
            locale: localeCode(countryId),
          }}
          style={{
            width: "100%",
          }}
        />
      }
      <p>
        {description}
      </p>
    </ImpactChart>
  );
}